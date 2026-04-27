# CogniEval - AI-Powered Automated Answer Sheet Evaluation System

![Cognitive Computing](https://img.shields.io/badge/Cognitive%20Computing-Project-blue)
![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![AI](https://img.shields.io/badge/AI-NLP%20%26%20Computer%20Vision-orange)

**A Cognitive Computing based project** that automatically evaluates handwritten and digital answer sheets using Artificial Intelligence, replacing manual correction by invigilators/teachers

---

## 📝 Introduction

In the traditional education system, evaluating answer sheets is a **labor-intensive, time-consuming, and subjective** process. Teachers and invigilators spend hours manually checking thousands of answer scripts, which often leads to delays in result declaration, human errors, fatigue, and inconsistency in marking.

**CogniEval** is an intelligent **Automated Answer Sheet Evaluation System** developed as a **Cognitive Computing Project**. It uses advanced AI techniques to read, understand, and grade student answers **just like a human teacher** — but with greater speed, consistency, and fairness.

The system is specially trained on answer scripts written by **different students** (varying handwriting styles, sentence structures, and knowledge levels) and evaluated by multiple teachers. This makes the AI capable of understanding semantic meaning, partial answers, and different ways of expressing the same concept — a true **cognitive capability**.

### Why "Cognitive" Computing?
- Goes beyond keyword matching → understands **context and meaning**
- Learns from diverse human answers (different people)
- Mimics human-like reasoning and grading
- Provides explanatory feedback (not just marks)

---

## 🎯 Problem Statement

- Manual correction of answer sheets is slow and prone to bias and errors.
- Delay in result processing.
- Inconsistent marking when multiple evaluators are involved.
- Large volume of answer scripts during semester exams.

---

## ✨ Key Features

- **Handwritten & Digital Answer Sheet Support**
- **OCR + Handwriting Recognition** (reads scanned/photographed papers)
- **Semantic Answer Evaluation** using NLP & LLMs
- **Trained on answers from different students** for fairness
- **Comparison with Model Answer Key + Multiple Teacher Keys**
- **Partial marking & explanatory feedback**
- **Auto-generated marksheet and performance report**
- **Web-based interface** for students and teachers
- **High accuracy** on subjective/descriptive answers

---

## 🧠 How It Works (Cognitive Flow)

1. Student uploads scanned answer sheet (PDF/Image)
2. Computer Vision module extracts text using OCR
3. NLP engine understands the meaning of the student's answer
4. AI compares it with model answer + historical student answers
5. Cognitive scoring engine assigns marks + generates feedback
6. Teacher can review & override marks (human-in-the-loop)

--

## 🛠️ Tech Stack

- **Backend**: Python + Flask / FastAPI
- **Computer Vision**: EasyOCR / Tesseract / PaddleOCR
- **NLP & Cognitive Layer**: Hugging Face Transformers / Google Gemini 1.5 / Llama-3 / BERT
- **Machine Learning**: Scikit-learn + Sentence Transformers
- **Frontend**: HTML + CSS + JavaScript 
- **Database**: SQLite / MySQL
- **Deployment**: Local / Render / Railway / AWS

---

