import React from "react";

function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200 mt-12 py-6'>
      <div className='max-w-7xl mx-auto px-4 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()}{" "}
        <span className='font-medium text-gray-700'>Plataforma de Cursos</span>.
        Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
