// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Configuração para animação de elementos
const observerOptions = {
  threshold: 0.1
}

// Observador para animar elementos quando aparecem na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Prepara as seções para animação
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0'
  section.style.transition = 'opacity 0.5s ease-in'
  observer.observe(section)
})

// Adiciona animação quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in')
  })
})

// Configuração do formulário de contato
const form = document.querySelector('.contato-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  
  console.log('Dados do formulário:', data)
  
  form.reset()
})

// Configuração do modal de imagens
const modal = document.getElementById('modal-imagem')
const modalImg = document.getElementById('modal-imagem-img')
const modalClose = document.querySelector('.modal-imagem-close')
const modalBackdrop = document.querySelector('.modal-imagem-backdrop')

// Prepara as imagens para visualização em tela cheia
document.querySelectorAll('.prototipo-img').forEach(img => {
  img.style.cursor = 'zoom-in'
  img.addEventListener('click', () => {
    modalImg.src = img.src
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  })
})

// Função para fechar o modal
function fecharModalImagem() {
  modal.style.display = 'none'
  modalImg.src = ''
  document.body.style.overflow = ''
}

// Eventos para fechar o modal
modalClose.addEventListener('click', fecharModalImagem)
modalBackdrop.addEventListener('click', fecharModalImagem)
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
    fecharModalImagem()
  }
}) 