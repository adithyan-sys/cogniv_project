const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const Jimp = require('jimp');
const tesseract = require('tesseract.js');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve frontend files

// Endpoint to handle file upload and evaluation
app.post('/evaluate', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const filePath = req.file.path;
        let text;

        // Handle different file types
        if (req.file.mimetype === 'application/pdf') {
            const dataBuffer = await fs.readFile(filePath);
            const pdfData = await pdfParse(dataBuffer);
            text = pdfData.text;
        } else if (['image/jpeg', 'image/png'].includes(req.file.mimetype)) {
            const image = await Jimp.read(filePath);
            const result = await tesseract.recognize(filePath, 'eng');
            text = result.data.text;
        } else {
            await fs.unlink(filePath);
            return res.status(400).json({ error: 'Unsupported file type' });
        }

        // Clean up uploaded file
        await fs.unlink(filePath);

                                     // Evaluate using AI (Mock API call to Grok-like service)
        const evaluation = await evaluateAnswer(text);

                                         // Generate report
        const reportPath = await generateReport(evaluation);

        res.json({
            score: evaluation.score,
            feedback: evaluation.feedback,
            reportUrl: `/reports/${path.basename(reportPath)}`
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Evaluation failed' });
    }
});

                          // Mock AI evaluation function (replace with actual AI service call)
async function evaluateAnswer(text) {
    // In production, this would call an AI service like Grok
    try {
        const response = await axios.post('https://api.x.ai/grok/evaluate', {
            text: text,
            maxScore: 20
        });

        return response.data;
    } catch (error) {
        // Fallback mock response
        return {
            score: Math.floor(Math.random() * 3) + 18, // Random score 18-20
            feedback: 'Well written answer with valid points.'
        };
    }
}

// Generate PDF report
async function generateReport(evaluation) {
    const { PDFDocument, rgb } = require('pdf-lib');
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;

    page.drawText('Evaluation Report', {
        x: 50,
        y: height - 50,
        size: 20,
        color: rgb(0, 0, 0)
    });

    page.drawText(`Score: ${evaluation.score}/20`, {
        x: 50,
        y: height - 100,
        size: fontSize,
        color: rgb(0, 0, 0)
    });

    page.drawText(`Feedback: ${evaluation.feedback}`, {
        x: 50,
        y: height - 120,
        size: fontSize,
        color: rgb(0, 0, 0)
    });

    const pdfBytes = await pdfDoc.save();
    const reportPath = path.join(__dirname, 'reports', `report-${Date.now()}.pdf`);
    await fs.mkdir(path.join(__dirname, 'reports'), { recursive: true });
    await fs.writeFile(reportPath, pdfBytes);

    return reportPath;
}

// Serve reports
app.use('/reports', express.static(path.join(__dirname, 'reports')));

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});