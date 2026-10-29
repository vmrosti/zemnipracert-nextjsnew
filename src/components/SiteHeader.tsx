'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
const links = [['Služby','/sluzby'],['Realizace','/realizace'],['O nás','/o-nas'],['Technika','/technika'],['Kontakt','/kontakt']];
export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="header site-header"><Link className="logo" href="/"><b>RT</b><span>ZEMNÍ PRÁCE RT</span></Link><nav className={open?'nav nav-open':'nav'}>{links.map(([label,url])=><Link href={url} key={url} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><div className="headright"><a className="phone" href="tel:+420777123456"><Phone size={15}/> +420 777 123 456</a><Link className="pill" href="/kontakt">POPTÁVKA <ArrowRight size={16}/></Link><button className="hamb" onClick={()=>setOpen(!open)} aria-label={open?'Zavřít menu':'Otevřít menu'}>{open?<X/>:<Menu/>}</button></div></header>
}
