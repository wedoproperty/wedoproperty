{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26\fsmilli13333 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Initialize flatpickr for booking form\
document.addEventListener('DOMContentLoaded', () => \{\
    flatpickr('#check-in', \{ dateFormat: 'Y-m-d' \});\
    flatpickr('#check-out', \{ dateFormat: 'Y-m-d' \});\
\});\
\
// Basic form submission handling (logs to console for demo)\
document.querySelectorAll('form').forEach(form => \{\
    form.addEventListener('submit', (e) => \{\
        e.preventDefault();\
        console.log('Form submitted!');\
        alert('Thank you for your submission! We will contact you soon.');\
    \});\
\});\
}