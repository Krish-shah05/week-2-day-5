import React from 'react'


export default function Footer(){
return (
<footer className="bg-light text-center py-4 mt-5">
<div className="container">
<p className="mb-1">© {new Date().getFullYear()} Silver Oak University-KRISH SHAH</p>
<small className="text-muted">Built with Vite, React and Bootstrap</small>
</div>
</footer>
)
}