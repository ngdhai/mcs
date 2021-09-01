window.onload = () => {
  translator.init()
  lazyLoading.init()
  if (loading.init()) {
    messenger.init()
    header.init()
    owlCarousel.init()
    modalCustom.init()
    countUpConfig.init()
    observerConfig.init()
    blog.init()
    footer.init()
    requestForm.init()
  }
}

const insightPostsData = [
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/kien-truc-phat-trien-website-jamstack/image-post.jpeg',
    tag: ['DEVELOPMENT'],
    title: 'Kiến trúc phát triển Website JAMSTACK',
    des: 'Published on May 28, 2021',
    link: 'kien-truc-phat-trien-website-jamstack.html',
    isBanner: true,
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 28',
    des: 'Published on Jun 3, 2021',
    link: 'insight-week-28.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/mean-vs-mern-vs-mevn-vs-lamp-stack-for-development/image-post.jpg',
    tag: ['DEVELOPMENT'],
    title: 'MEAN vs MERN vs MEVN vs LAMP Stack for Development',
    des: 'Published on Jun 3, 2021',
    link: 'mean-vs-mern-vs-mevn-vs-lamp-stack-for-development.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/what-is-ja-mstack-and-why-you-should-try-it/image-post.png',
    tag: ['DEVELOPMENT'],
    title: 'What is JAMstack and Why You Should Try It',
    des: 'Published on May 28, 2021',
    link: 'what-is-ja-mstack-and-why-you-should-try-it.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 27',
    des: 'Published on Jun 3, 2021',
    link: 'insight-week-27.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 26',
    des: 'Published on Jun 3, 2021',
    link: 'insight-week-26.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 25',
    des: 'Published on May 06, 2021',
    link: 'insight-week-25.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/8-tips-for-managing-an-outsourced-it-contract/image-post.png',
    tag: ['BUSINESS'],
    title: '8 Tips for Managing an Outsourced IT Contract',
    des: 'Published on January 6, 2021',
    link: '8-tips-for-managing-an-outsourced-it-contract.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/best-strategies-for-managing/image-post.jpeg',
    tag: ['BUSINESS', 'DEVELOPMENT'],
    title: 'Best Strategies for Managing Bugs and Feature Requests',
    des: 'Published on January 4, 2021',
    link: 'best-strategies-for-managing.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/digital-product-development-software-outsourcing-company/image-post.png',
    tag: ['BUSINESS'],
    title: 'Digital Product Development vs Software Outsourcing – What Should You Choose?',
    des: 'Published on March 12, 2021',
    link: 'digital-product-development-software-outsourcing-company.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 24',
    des: 'Published on May 06, 2021',
    link: 'insight-week-24.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/how-to-introduce-the-scrum-methodology/image-post.png',
    tag: ['BUSINESS', 'DEVELOPMENT'],
    title: 'How to Introduce the Scrum Methodology into Your Project',
    des: 'Published on January 5, 2021',
    link: 'how-to-introduce-the-scrum-methodology.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 23',
    des: 'Published on May 06, 2021',
    link: 'insight-week-23.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 22',
    des: 'Published on May 06, 2021',
    link: 'insight-week-22.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/why-fixed-price-contracts/image-post.png',
    tag: ['BUSINESS'],
    title: 'Why Fixed-Price Contracts Won’t Fix IT Budget Overruns',
    des: 'Published on January 2, 2021',
    link: 'why-fixed-price-contracts.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 21',
    des: 'Published on May 06, 2021',
    link: 'insight-week-21.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 20',
    des: 'Published on May 06, 2021',
    link: 'insight-week-20.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 19',
    des: 'Published on May 06, 2021',
    link: 'insight-week-19.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 18',
    des: 'Published on May 06, 2021',
    link: 'insight-week-18.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 17',
    des: 'Published on May 06, 2021',
    link: 'insight-week-17.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/kanban-vs-scrum/image-post.png',
    tag: ['BUSINESS'],
    title: 'Kanban vs Scrum – This Is the Easy Way How to Choose',
    des: 'Published on Febuary 21, 2021',
    link: 'kanban-vs-scrum.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 16',
    des: 'Published on May 06, 2021',
    link: 'insight-week-16.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 15',
    des: 'Published on May 06, 2021',
    link: 'insight-week-15.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/react-training-beginners/image-post.jpeg',
    tag: ['DEVELOPMENT'],
    title: '5 React Training Courses for Beginners',
    des: 'Published on November 20, 2020',
    link: 'react-training-beginners.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 14',
    des: 'Published on May 06, 2021',
    link: 'insight-week-14.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 13',
    des: 'Published on May 06, 2021',
    link: 'insight-week-13.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 12',
    des: 'Published on May 06, 2021',
    link: 'insight-week-12.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/organize-scrum-sprint/image-post.png',
    tag: ['BUSINESS'],
    title: 'The One and Only Way to Organize a Scrum Sprint You’ll Ever Need',
    des: 'Published on Febuary 21, 2021',
    link: 'organize-scrum-sprint.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 11',
    des: 'Published on May 06, 2021',
    link: 'insight-week-11.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 10',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-10.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 9',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-9.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 8',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-8.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/earn-more-money-by-investing/image-post.png',
    tag: ['BUSINESS'],
    title: 'Earn More Money by Investing in Software Quality Assurance',
    des: 'Published on January 4, 2021',
    link: 'earn-more-money-by-investing.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 7',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-7.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 6',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-6.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/key-employees-leave/image-post.jpeg',
    tag: ['BUSINESS'],
    title: 'When Key Employees Leave – the Guide to Move on',
    des: 'Published on December 12, 2020',
    link: 'key-employees-leave.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 5',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-5.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 4',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-4.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/offshore-outsourcing/image-post.png',
    tag: ['BUSINESS'],
    title: 'Offshore Outsourcing – What Is It? Is It Worth Considering?',
    des: 'Published on January 4, 2021',
    link: 'offshore-outsourcing.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/software-engineer-skills/image-post.png',
    tag: ['DEVELOPMENT'],
    title: '5 Most Crucial Software Engineer Skills (Hint: It’s Not Only Coding)',
    des: 'Published on March 24, 2021',
    link: 'software-engineer-skills.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/software-testing-life-cycle/image-post.png',
    tag: ['BUSINESS', 'DEVELOPMENT'],
    title: 'Software Testing Life Cycle – Everything You Need to Know',
    des: 'Published on Febuary 22, 2021',
    link: 'software-testing-life-cycle.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/test-driven-development/image-post.png',
    tag: ['DEVELOPMENT'],
    title: 'Test-Driven Development (TDD) – Quick Guide',
    des: 'Published on January 2, 2021',
    link: 'test-driven-development.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 3',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-3.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/types-of-software-testing/image-post.png',
    tag: ['BUSINESS', 'DEVELOPMENT'],
    title: 'How Many Types of Software Testing Are There?',
    des: 'Published on January 14, 2021',
    link: 'types-of-software-testing.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs/what-is-aws/image-post.png',
    tag: ['DEVELOPMENT'],
    title: 'What is AWS? An Introduction to Amazon Web Services',
    des: 'Published on January 6, 2021',
    link: 'what-is-aws.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 2',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-2.html',
  },
  {
    image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/insights/image-post.png',
    tag: ['INSIGHTS'],
    title: 'Bảng tin điểm Tuần 1',
    des: 'Published on Apr 24, 2021',
    link: 'insight-week-1.html',
  },
  //- {
  //-   image: 'https://acaziasoftcom.s3.amazonaws.com/assets/images/blogs//image-post.png',
  //-   tag: ['BUSINESS', 'DEVELOPMENT'],
  //-   title: '',
  //-   des: 'Published on January 14, 2021',
  //-   link: '.html',
  //- },
]

const loading = {
  init: function () {
    return this.configLoading()
  },
  configLoading: function () {
    const main = document.querySelector('body')
    main.style.display = 'block'
    return true
  }
}

const lazyLoading = {
  init: function () {
    this.config()
  },
  config: function () {
    const lazyLoadInstance = new LazyLoad({});
  }
}

const owlCarousel = {
  init: function () {
    this.setupProjectCarousel()
    this.setupClientCarousel()
    this.setupTeamCarousel()
    this.setupHeaderQuarterCarousel()
  },
  setupHeaderQuarterCarousel: function () {
    $("#headquaters-carousel").owlCarousel({
      responsive: {
        0: {
          items: 2
        },
        575: {
          items: 3
        },
      },
      loop: true,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 20,
    });
  },
  setupProjectCarousel: function () {
    $("#project-carousel").owlCarousel({
      responsive: {
        0: {
          items: 2
        },
        475: {
          items: 3
        },
        768: {
          items: 4
        },
        991: {
          items: 5
        },
        1024: {
          items: 6
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      lazyLoad: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 20,
    });
  },
  setupClientCarousel: function () {
    $("#client-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        700: {
          items: 2
        },
        991: {
          items: 3
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      lazyLoad: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 20,
    });
  },
  setupTeamCarousel: function () {
    const $owl = $("#about-team-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        575: {
          items: 2,
          slideBy: 2
        },
        700: {
          items: 3,
          slideBy: 3
        },
        991: {
          items: 4,
          slideBy: 4
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: ['<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />', '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />'],
      margin: 20,
    });
  },
}

const header = {
  init: function () {
    this.scrollHeaderEffect()
    this.eventNavLinkMobile()
    this.eventNavMobile()
    this.activeNavLink()
  },
  scrollHeaderEffect: function () {
    const header = document.querySelector('.header-layout')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) header.classList.add('active')
      else header.classList.remove('active')
    })
  },
  eventNavLinkMobile() {
    const navTabLink = document.querySelectorAll('header.header-layout .header-wrapper > .header-nav > .nav-item')
    navTabLink.forEach((item) => item.addEventListener('click', () => {
      item.classList.toggle('active')
    }))
  },
  eventNavMobile() {
    const navBtnMobile = document.querySelector('header.header-layout .header-mobile-menu')
    const navMain = document.querySelector('header.header-layout .header-wrapper > .header-nav')
    navBtnMobile.addEventListener('click', () => {
      navBtnMobile.classList.toggle('active')
      navMain.classList.toggle('active')
    })
  },
  activeNavLink() {
    const navLinks = document.querySelectorAll('.header-layout .header-nav .nav-item')
    const currentPath = window.location.pathname.substring(1)
    navLinks.forEach((item) => {
      const unique = item.dataset.unique
      const uniqueGroup = item.dataset.uniquegroup
      if ((!currentPath && unique === 'index.html') || (currentPath && unique === currentPath)) item.classList.add('hightlight')
      if (uniqueGroup && unique === currentPath) {
        item.parentNode.parentNode.classList.add('hightlight')
      }
    })
  },
}

const footer = {
  init: function () {
    this.yearCopyRight()
  },
  yearCopyRight: function () {
    const target = document.querySelector('#yearCopyRight')
    const date = new Date()
    target.innerHTML = date.getFullYear()
  }
}

const modalCustom = {
  init: function () {
    this.setupModal('#open-free-quote-modal', '#free-quote-modal')
    this.setupModal('#open-contact-modal', '#contact-modal')
  },
  setupModal(idOpen, idWrapper) {
    const openBtn = document.querySelectorAll(idOpen)
    const wrapperModal = document.querySelector(idWrapper)

    if (openBtn.length !== 0 && wrapperModal) {
      const closeBtn = wrapperModal.querySelector('.modal-close')
      const overlayModal = wrapperModal.querySelector('.modal-overlay')
      const body = document.querySelector('body')

      openBtn.forEach((item) => item.addEventListener('click', () => {
        wrapperModal.classList.add('active')
        body.style.overflow = 'hidden'
      }))

      closeBtn.addEventListener('click', () => {
        wrapperModal.classList.remove('active')
        body.style.overflow = 'auto'
      })

      overlayModal.addEventListener('click', () => {
        wrapperModal.classList.remove('active')
        body.style.overflow = 'auto'
      })
    }
  }
}

const countUpConfig = {
  init: function () {
    this.configCountUpWelcomeSection()
    this.configCountAboutUsSection()
  },
  configCountUpWelcomeSection: function () {
    const dataCountWelcomeSection = [{
        targetHTML: '#countUp-long-term',
        numberCountUp: 92,
        suffix: '%',
      },
      {
        targetHTML: '#countUp-offices-internationally',
        numberCountUp: 60
      },
      {
        targetHTML: '#countUp-years-in-viet-nam ',
        numberCountUp: 7
      },
    ]
    this.setupScrollEvent('.section-welcome .about-wrapper', dataCountWelcomeSection)
  },
  configCountAboutUsSection: function () {
    const dataCountWelcomeSection = [
      {
        targetHTML: '#countUp-teammates',
        numberCountUp: 60
      },
      {
        targetHTML: '#countUp-projects-handle',
        numberCountUp: 200,
        suffix: '+',
      },
      {
        targetHTML: '#countUp-development-centers',
        numberCountUp: 2
      },
    ]
    this.setupScrollEvent('.section-approach', dataCountWelcomeSection)
  },
  setupScrollEvent: function (targetHTML, elementsCountUp) {
    const target = document.querySelector(targetHTML)
    if (target) {
      const options = {
        threshold: 1,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            elementsCountUp.forEach((item) => this.setupCountUp(item.targetHTML, item.numberCountUp, item.suffix))
            observer.unobserve(entry.target);
          }
        })
      }, options);
      observer.observe(target);
    }
  },
  setupCountUp(targetId, number, suffix = '') {
    const options = {
      startVal: 0,
      duration: 5,
      suffix,
    }
    const target = document.querySelector(targetId)
    const countUpObj = new CountUp(target, number, options)
    countUpObj.start()
  }
}

const observerConfig = {
  init: function () {
    this.loadMoreItems('.section-products-list .products-list-wrapper')
  },
  setupProductItems: function (targetHTML) {
    const target = document.querySelectorAll(targetHTML)
    if (target.length !== 0) {
      const options = {
        threshold: 0.5,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          if (entry.target.className.includes('animateIn')) {
            observer.unobserve(entry.target)
          } else {
            entry.target.classList.add('animateIn')
            observer.unobserve(entry.target)
          }
        })
      }, options);

      target.forEach((item) => observer.observe(item))
    }
  },
  loadMoreItems: function (main) {
    const loading = document.querySelector('.acazia-loading-state')
    const mainHTML = document.querySelector(main)
    if (mainHTML) {
      const data = mainHTML.querySelectorAll('.product-item')
      let page = 1
      const perPage = 3
      const renderItems = () => {
        const items = Array.prototype.slice.call(data, (page - 1) * perPage, (page - 1) * perPage + perPage)
        items.forEach((item) => item.classList.add('show'))

        if (items.length === perPage) {
          page++
          return true
        } else {
          return false
        }
      }
      if (loading) {
        const options = {
          threshold: 1,
          rootMargin: "0px",
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            if (renderItems()) {
              this.setupProductItems('.products-list-wrapper .product-item')
            } else {
              loading.style.display = 'none'
              observer.unobserve(entry.target)
            }
          })
        }, options);

        observer.observe(loading)
      }
    }
  }
}

const blog = {
  init: function () {
    // this.filterIsotope()
    // this.filterBlog()
    this.searchBlog()
    this.getDataBlog()
  },
  getDataBlog: function() {
    function shuffle(array) {
      var currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }

    return shuffle(insightPostsData);
  },
  searchBlog: function() {
    const blogData = this.getDataBlog();
    const inputSearch = document.querySelector('.section-insight-search input')
    const btnSearch = document.querySelector('.section-insight-search button')
    const blogMain = document.querySelector('.insight-posts-wrapper')

    if (inputSearch && btnSearch && blogMain) {
      function searchingBlog(value) {
        blogMain.innerHTML = ''
        const searchingData = blogData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
        searchingData.forEach((item, index) => {
          const insightPost = document.createElement('div')
          insightPost.className = `insight-post grid-filter-item active ${index === 0 ? 'banner' : ''} ${item.tag.join(' ').toLowerCase()} `
          insightPost.innerHTML = `
            <a class="post-image" href="${item.link}">
              <img src="${item.image}" alt="">
            </a>
            <h4 class="post-tag">${item.tag.join(' ')}</h4>
            <a class="post-title" href="${item.link}">${item.title}</a>
            <p>${item.des}</p>
          `
          blogMain.appendChild(insightPost)
        })

        if (searchingData.length === 0) {
          const empty = document.createElement('div')
          empty.className = 'insight-post-empty flex items-center justify-center'
          empty.innerHTML = '<img src="./assets/images/image-blog-not-found.png" alt="" />'
          blogMain.appendChild(empty)
        }
      }

      inputSearch.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) searchingBlog(inputSearch.value)
      })

      btnSearch.addEventListener('click', () => {
        searchingBlog(inputSearch.value)
      })

      searchingBlog('')
    }
  },
  filterBlog: function() {
    const tabsFilter = document.querySelectorAll('.grid-filter-button-group .tab-item')
    const blogs = document.querySelectorAll('.grid-filter-wrapper .grid-filter-item')
    tabsFilter.forEach((item) => item.addEventListener('click', () => {
      const filterValue = item.dataset.filter
      const filterBlog = []

      tabsFilter.forEach(i => i.classList.remove('active'))
      item.classList.add('active')

      blogs.forEach(i => {
        i.classList.remove('active')
        i.classList.remove('banner')

        if (filterValue === '*') {
          blogs.forEach(j => filterBlog.push(j))
        }
        if (i.className.includes(filterValue)) {
          filterBlog.push(i)
        }
      })

      filterBlog.forEach((item, index) => {
        if (index === 0) item.classList.add('banner')
        item.classList.add('active')
      })
    }))
  },
  filterIsotope: function () {
    const $filter = $('.grid-filter-wrapper').isotope({
      itemSelector: '.grid-filter-item',
      layoutMode: 'fitRows',
    });

    $('.grid-filter-button-group').on('click', '.tab-item', function () {
      $('.grid-filter-button-group .tab-item').removeClass('active')
      $(this).addClass('active')

      const filterValue = $(this).attr('data-filter')

      const allTarget = document.querySelectorAll('.grid-filter-wrapper .grid-filter-item')
      let isFindFirst = false
      allTarget.forEach(i => i.classList.remove('banner'))

      allTarget.forEach((item, index) => {
        if (item.className.includes(filterValue.substring(1)) && !isFindFirst) {
          isFindFirst = true
          item.classList.add('banner')
        }
      })

      $filter.isotope({
        filter: filterValue
      })
    });
  },
}
const titleEmail = 'Acazia Software Company'
const emailTo = ['info@acaziasoft.com']
const senderName = 'Acazia Mail'
const ccList = ['tanlx@acaziasoft.com']

const apiSubmit = {
  validateRequired: (value) => {
    return value.trim() !== ''
  },
  validateEmail: (value) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  },
  submitContactFormSingle: async (email) => {
    const currentDate = new Date()
    const options = {
      headers: {
        "Authorization": 'Basic MjE2OTUzOjEyM05WSEcmJWhnOjlrVUpBVzgy',
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    };
    const params = {
      "emailTo": emailTo,
      "subject": `'${email}' submitted a Form request`,
      "senderName": senderName,
      "content": `<div bgcolor=\"#F7F7F7\">\n<div style=\"background-color:#f7f7f7\">\n<table width=\"100%\" bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"text-align:center\">\n<tbody>\n<tr>\n<td>\n<table bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"700\" align=\"center\" style=\"margin:0px auto\">\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"right\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td height=\"39\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td align=\"center\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td align=\"center\">\n<div>\n<img width=\"150\" border=\"0\" alt=\"Acazia Software Logo\" style=\"display:block;border:none;outline:none;text-decoration:none\" src=\"https://acaziasoft.com/wp-content/uploads/2019/04/logo-2.png\" class=\"CToWUd\">\n</div></td>\n</tr>\n<tr>\n<td bgcolor=\"#F7F7F7\" height=\"40\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n\n\n<tr>\n<td bgcolor=\"#FFFFFF\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"36\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:16px;color:#505050!important;text-align:left;line-height:25.6px;font-weight:normal;text-transform:none\">\n<p style=\"color:#505050!important;\">Hi ${titleEmail},</p>\n<p style=\"color:#505050!important;\">${email} submitted a request in News Letter Form to get new articles.</p>\n<p style=\"color:#505050!important;\">\n<ul>\n</ul>\n</p>\nBest regards,<br>\n<b>${titleEmail}</b><br>\n<br>\n<i>This email is auto-generated by the system. Please do not reply.</i>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"center\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td id=\"m_4790268208304861421edit_text_3\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n<tr>\n<td height=\"10\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:12px;color:#808080;font-weight:normal;text-align:center;line-height:150%\">\n<div>\n<em>© Copyright 2019 - ${currentDate.getFullYear()} ${titleEmail}<br>All rights reserved.</em>\n</div> </td>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"20\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div></div>`,
      "ccList": ccList,
      "bccList": [],
      "html": true
    }
    const res = await axios.post('https://id.acaziasoft.com/v1/api/external/email/send', params, options)
    return res.data
  },
  submitContactForm: async (
    name,
    email,
    challenge,
    description,
    budgetFrom,
    budgetTo,
    expertise
  ) => {
    const currentDate = new Date()
    const options = {
      headers: {
        "Authorization": 'Basic MjE2OTUzOjEyM05WSEcmJWhnOjlrVUpBVzgy',
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    };
    const params = {
      "emailTo": emailTo,
      "subject": `'${name}' submitted a Form request`,
      "senderName": senderName,
      "content": `<div bgcolor=\"#F7F7F7\">\n<div style=\"background-color:#f7f7f7\">\n<table width=\"100%\" bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"text-align:center\">\n<tbody>\n<tr>\n<td>\n<table bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"700\" align=\"center\" style=\"margin:0px auto\">\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"right\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td height=\"39\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td align=\"center\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td align=\"center\">\n<div>\n<img width=\"150\" border=\"0\" alt=\"Acazia Software Logo\" style=\"display:block;border:none;outline:none;text-decoration:none\" src=\"https://acaziasoft.com/wp-content/uploads/2019/04/logo-2.png\" class=\"CToWUd\">\n</div></td>\n</tr>\n<tr>\n<td bgcolor=\"#F7F7F7\" height=\"40\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n\n\n<tr>\n<td bgcolor=\"#FFFFFF\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"36\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:16px;color:#505050!important;text-align:left;line-height:25.6px;font-weight:normal;text-transform:none\">\n<p style=\"color:#505050!important;\">Hi ${titleEmail},</p>\n<p style=\"color:#505050!important;\">${name} submitted a Form request to you:</p>\n<p style=\"color:#505050!important;\">\n<ul>\n<li>Name: ${name}</li>\n<li>Email: ${email}</li>\n<li>Company's biggest challenge: ${challenge}</li>\n<li>Project description: ${description}</li>\n<li>Budget from: ${budgetFrom}</li>\n<li>Budget to: ${budgetTo}</li>\n<li>Expertise: ${expertise}</li>\n</ul>\n</p>\nBest regards,<br>\n<b>${titleEmail}</b><br>\n<br>\n<i>This email is auto-generated by the system. Please do not reply.</i>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"center\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td id=\"m_4790268208304861421edit_text_3\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n<tr>\n<td height=\"10\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:12px;color:#808080;font-weight:normal;text-align:center;line-height:150%\">\n<div>\n<em>© Copyright 2019 - ${currentDate.getFullYear()} ${titleEmail}<br>All rights reserved.</em>\n</div> </td>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"20\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div></div>`,
      "ccList": ccList,
      "bccList": [],
      "html": true
    }
    const res = await axios.post('https://id.acaziasoft.com/v1/api/external/email/send', params, options)
    return res.data
  },
  submitContactFormGetFreeQuote: async (name, email, phone, project) => {
    const currentDate = new Date()
    const options = {
      headers: {
        "Authorization": 'Basic MjE2OTUzOjEyM05WSEcmJWhnOjlrVUpBVzgy',
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    };
    const params = {
      "emailTo": emailTo,
      "subject": `'${name}' submitted a Form request`,
      "senderName": senderName,
      "content": `<div bgcolor=\"#F7F7F7\">\n<div style=\"background-color:#f7f7f7\">\n<table width=\"100%\" bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"text-align:center\">\n<tbody>\n<tr>\n<td>\n<table bgcolor=\"#F7F7F7\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"700\" align=\"center\" style=\"margin:0px auto\">\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"right\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"right\">\n<tbody>\n<tr>\n<td height=\"39\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td align=\"center\" valign=\"top\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td valign=\"top\" width=\"100%\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td align=\"center\">\n<div>\n<img width=\"150\" border=\"0\" alt=\"Acazia Software Logo\" style=\"display:block;border:none;outline:none;text-decoration:none\" src=\"https://acaziasoft.com/wp-content/uploads/2019/04/logo-2.png\" class=\"CToWUd\">\n</div></td>\n</tr>\n<tr>\n<td bgcolor=\"#F7F7F7\" height=\"40\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n\n\n\n<tr>\n<td bgcolor=\"#FFFFFF\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"36\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:16px;color:#505050!important;text-align:left;line-height:25.6px;font-weight:normal;text-transform:none\">\n<p style=\"color:#505050!important;\">Hi ${titleEmail},</p>\n<p style=\"color:#505050!important;\">${name} submitted a Form request to you:</p>\n<p style=\"color:#505050!important;\">\n<ul>\n<li>Name: ${name}</li>\n<li>Email: ${email}</li>\n<li>Phone: ${phone}</li>\n<li>Project description: ${project}</li>\n</ul>\n</p>\nBest regards,<br>\n<b>${titleEmail}</b><br>\n<br>\n<i>This email is auto-generated by the system. Please do not reply.</i>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n\n</tbody>\n</table></td>\n</tr>\n\n<tr>\n<td bgcolor=\"#F7F7F7\" align=\"center\">\n<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n<tbody>\n<tr>\n<td id=\"m_4790268208304861421edit_text_3\" align=\"center\">\n<table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n<tbody>\n<tr>\n<td height=\"10\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td style=\"font-family:\\'Proxima Nova\\',Calibri,Helvetica,sans-serif;font-size:12px;color:#808080;font-weight:normal;text-align:center;line-height:150%\">\n<div>\n<em>© Copyright 2019 - ${currentDate.getFullYear()} ${titleEmail}<br>All rights reserved.</em>\n</div> </td>\n<td width=\"25\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n<tr>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td height=\"20\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n<td width=\"41\" style=\"font-size:1px;line-height:1px\">&nbsp;</td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table> </td>\n</tr>\n</tbody>\n</table></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div></div>`,
      "ccList": ccList,
      "bccList": [],
      "html": true
    }
    const res = await axios.post('https://id.acaziasoft.com/v1/api/external/email/send', params, options)
    return res.data
  }
}

const requestForm = {
  init: function () {
    this.submitContactForm()
    this.submitContactFormSingle()
    this.submitContactFormGetFreeQuote()
  },
  showTranslatedMessage: function (dom, message) {
    if (translator.checkLanguage() === 'vi') dom.innerHTML = message.messageVi
    else dom.innerHTML = message.messageEn
    if (message.type === 'success') dom.style.color = '#2ecc71'
    else dom.style.color = '#e74c3c'
  },
  submitContactForm: function () {
    const main = document.querySelector('#contact-form')
    if (main) {
      const inputName = main.querySelector('input[name="name"]')
      const inputEmail = main.querySelector('input[name="email"]')
      const inputChallenge = main.querySelector('textarea[name="challenge"]')
      const inputDescription = main.querySelector('textarea[name="description"]')
      const inputBudgetFrom = main.querySelector('input[name="budgetFrom"]')
      const inputBudgetTo = main.querySelector('input[name="budgetTo"]')
      const inputExpertise = main.querySelectorAll('input[type="checkbox"]')

      const btnSubmit = main.querySelector('button')

      btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        let isError = false

        if (!apiSubmit.validateRequired(inputName.value)) {
          isError = true
          this.showTranslatedMessage(
            inputName.nextElementSibling, {
              type: 'error',
              messageEn: 'Name Field is required',
              messageVi: 'Vui lòng nhập tên của bạn'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputName.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: 'Email Field is required',
              messageVi: 'Vui lòng nhập email của bạn'
            }
          )
        } else if (!apiSubmit.validateEmail(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: 'Email Field is invalid',
              messageVi: 'Vui lòng nhập đúng định dạng email'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputChallenge.value)) {
          isError = true
          this.showTranslatedMessage(
            inputChallenge.nextElementSibling, {
              type: 'error',
              messageEn: 'Challenge Field is required',
              messageVi: 'Vui lòng mô tả thử thách lớn nhất của bạn'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputChallenge.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputDescription.value)) {
          isError = true
          this.showTranslatedMessage(
            inputDescription.nextElementSibling, {
              type: 'error',
              messageEn: 'Project description Field is required',
              messageVi: 'Vui lòng mô tả dự án của bạn'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputDescription.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputBudgetFrom.value)) {
          isError = true
          this.showTranslatedMessage(
            inputBudgetFrom.nextElementSibling, {
              type: 'error',
              messageEn: 'Budget from Field is required',
              messageVi: 'Vui lòng nhập giới hạn ngân sách'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputBudgetFrom.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputBudgetTo.value)) {
          isError = true
          this.showTranslatedMessage(
            inputBudgetTo.nextElementSibling, {
              type: 'error',
              messageEn: 'Budget to Field is required',
              messageVi: 'Vui lòng nhập giới hạn ngân sách'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputBudgetTo.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        let isChecked = false
        const expertiseValues = []
        const expertiseMessgage = main.querySelector('.expertise-messgage')
        inputExpertise.forEach((item) => {
          if (item.checked) {
            isChecked = true
            expertiseValues.push(item.dataset.label)
          }
        })
        if (!isChecked) {
          isError = true
          this.showTranslatedMessage(
            expertiseMessgage, {
              type: 'error',
              messageEn: 'Please choose at least 1 option above',
              messageVi: 'Vui lòng chọn ít nhất một chuyên môn'
            }
          )
        } else {
          this.showTranslatedMessage(
            expertiseMessgage, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!isError) {
          const res = await apiSubmit.submitContactForm(
            inputName.value,
            inputEmail.value,
            inputChallenge.value,
            inputDescription.value,
            inputBudgetFrom.value,
            inputBudgetTo.value,
            expertiseValues.join(',')
          )
          const message = main.querySelector('.message-submit')
          if (res.success) {
            this.showTranslatedMessage(
              message, {
                type: 'success',
                messageEn: 'Submit successfully !',
                messageVi: 'Gửi yêu cầu thành công !'
              }
            )
          } else {
            this.showTranslatedMessage(
              message, {
                type: 'errror',
                messageEn: 'Something went wrong. Please try again !',
                messageVi: 'Có lỗi xảy ra. Xin vui lòng thử lại !'
              }
            )
          }
        }
      })
    }
  },
  submitContactFormSingle: function () {
    const main = document.querySelector('#contact-form-single')
    if (main) {
      const inputEmail = main.querySelector('input[name="email"]')
      const btnSubmit = main.querySelector('button')
      const message = main.querySelector('.form-error')

      btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        let isError = false

        if (!apiSubmit.validateRequired(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            message, {
              type: 'error',
              messageEn: 'Email Field is required',
              messageVi: 'Vui lòng nhập email của bạn'
            }
          )
        } else if (!apiSubmit.validateEmail(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            message, {
              type: 'error',
              messageEn: 'Email Field is invalid',
              messageVi: 'Vui lòng nhập đúng định dạng email'
            }
          )
        }

        if (!isError) {
          const res = await apiSubmit.submitContactFormSingle(inputEmail.value)
          if (res.success) {
            this.showTranslatedMessage(
              message, {
                type: 'success',
                messageEn: 'Submit successfully !',
                messageVi: 'Gửi yêu cầu thành công !'
              }
            )
          } else {
            this.showTranslatedMessage(
              message, {
                type: 'errror',
                messageEn: 'Something went wrong. Please try again !',
                messageVi: 'Có lỗi xảy ra. Xin vui lòng thử lại !'
              }
            )
          }
        }
      })
    }
  },
  submitContactFormGetFreeQuote: function () {
    const main = document.querySelector('#contact-form-get-free-quote')
    if (main) {
      const inputName = main.querySelector('input[name="name"]')
      const inputEmail = main.querySelector('input[name="email"]')
      const inputPhone = main.querySelector('input[name="phone"]')
      const inputProject = main.querySelector('input[name="project"]')
      const btnSubmit = main.querySelector('.free-quote-submit')

      btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        let isError = false

        if (!apiSubmit.validateRequired(inputName.value)) {
          isError = true
          this.showTranslatedMessage(
            inputName.nextElementSibling, {
              type: 'error',
              messageEn: 'Name Field is required',
              messageVi: 'Vui lòng nhập tên của bạn'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputName.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!apiSubmit.validateRequired(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: 'Email Field is required',
              messageVi: 'Vui lòng nhập email của bạn'
            }
          )
        } else if (!apiSubmit.validateEmail(inputEmail.value)) {
          isError = true
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: 'Email Field is invalid',
              messageVi: 'Vui lòng nhập đúng định dạng email'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputEmail.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        // if (!apiSubmit.validateRequired(inputPhone.value)) {
        //   isError = true
        //   inputPhone.nextElementSibling.innerHTML = 'Phone Field is required'
        // } else {
        //   inputPhone.nextElementSibling.innerHTML = ''
        // }

        if (!apiSubmit.validateRequired(inputProject.value)) {
          isError = true
          this.showTranslatedMessage(
            inputProject.nextElementSibling, {
              type: 'error',
              messageEn: 'Project description Field is required',
              messageVi: 'Vui lòng mô tả dự án của bạn'
            }
          )
        } else {
          this.showTranslatedMessage(
            inputProject.nextElementSibling, {
              type: 'error',
              messageEn: '',
              messageVi: ''
            }
          )
        }

        if (!isError) {
          const res = await apiSubmit.submitContactFormGetFreeQuote(
            inputName.value,
            inputEmail.value,
            inputPhone.value,
            inputProject.value,
          )
          const message = main.querySelector('.message-submit')
          if (res.success) {
            this.showTranslatedMessage(
              message, {
                type: 'success',
                messageEn: 'Submit successfully !',
                messageVi: 'Gửi yêu cầu thành công !'
              }
            )
          } else {
            this.showTranslatedMessage(
              message, {
                type: 'errror',
                messageEn: 'Something went wrong. Please try again !',
                messageVi: 'Có lỗi xảy ra. Xin vui lòng thử lại !'
              }
            )
          }
        }
      })
    }
  }
}

const translator = {
  init: function () {
    this.config()
    this.translateTyperHomeBanner()
    this.translatePlaceholder()
    this.checkLanguage()
  },
  checkLanguage: function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    const switchLanguageWrapper = document.querySelectorAll('.language-switch')
    switchLanguageWrapper.forEach((item) => {
      const langOption = item.querySelectorAll('.lang-option')
      langOption.forEach(langOption => {
        if (langOption.dataset.lang === lang) langOption.classList.add('active')
        else langOption.classList.remove('active')
      })
    })

    return lang;
  },
  translatePlaceholder: function () {
    const inputs = document.querySelectorAll('input')
    const dict = {
      'Your name': {
        vi: 'Tên của bạn',
        en: 'Your name',
      },
      'Phone number (optional)': {
        vi: 'Số điện thoại (không bắt buộc)',
        en: 'Phone number (optional)',
      },
      'Tell us about your project': {
        vi: 'Hãy cho chúng tôi biết về dự án của bạn',
        en: 'Tell us about your project',
      },
      'Your email address': {
        vi: 'Địa chỉ email của bạn',
        en: 'Your email address',
      },
      'Your e-mail address': {
        vi: 'Địa chỉ email của bạn',
        en: 'Your e-mail address',
      },
    }
    inputs.forEach((item) => {
      if (dict[item.placeholder]) {
        if (this.checkLanguage() === 'vi') {
          item.placeholder = dict[item.placeholder].vi
        } else {
          item.placeholder = dict[item.placeholder].en
        }
      }
    })
  },
  translateTyperHomeBanner: function () {
    const target = document.querySelector('.banner-home')
    if (target) {
      if (this.checkLanguage() === 'vi') {
        target.querySelector('.typer.en').remove()
      } else {
        target.querySelector('.typer.vi').remove()
      }
    }
  },
  config: function () {
    const dict = {
      'the software development company': {
        vi: 'công ty phát triển phần mềm',
        en: 'the software development company',
      },
      'About Us': {
        vi: 'Giới thiệu',
        en: 'About Us',
      },
      'Services': {
        vi: 'Dịch vụ',
        en: 'Services',
      },
      'Showcases': {
        vi: 'Dự án đã làm',
        en: 'Showcases',
      },
      'Resources': {
        vi: 'Tài nguyên',
        en: 'Resources',
      },
      'Get a free quote!': {
        vi: 'Nhận báo giá miễn phí!',
        en: 'Get a free quote!',
      },
      'Build or scale up': {
        vi: 'Đối tác tin cậy',
        en: 'Build or scale up',
      },
      'development team': {
        vi: 'của bạn',
        en: 'development team',
      },
      'In weeks, not months. Tell us about your needs.': {
        vi: 'Đằng sau mỗi ứng dụng tuyệt vời chúng tôi làm cho khách hàng là một đội ngũ luôn hết mình và tận tâm với công việc.',
        en: 'In weeks, not months. Tell us about your needs.',
      },
      'See our Works': {
        vi: 'Khám phá dự án',
        en: 'See our Works',
      },
      'Home': {
        vi: 'Trang chủ',
        en: 'Home',
      },
      'About us': {
        vi: 'Giới thiệu',
        en: 'About us',
      },
      'Software development': {
        vi: 'Phát triển phần mềm',
        en: 'Software development',
      },
      'Business process solutions': {
        vi: 'Tư vấn giải pháp phần mềm cho doanh nghiệp',
        en: 'Business process solutions',
      },
      'Application mainternace and support': {
        vi: 'Bảo trì ứng dụng',
        en: 'Application mainternace and support',
      },
      'Quality assurance and testing': {
        vi: 'Kiểm soát chất lượng',
        en: 'Quality assurance and testing',
      },
      'Apps': {
        vi: 'Ứng dụng',
        en: 'Apps',
      },
      'Games': {
        vi: 'Trò chơi',
        en: 'Games',
      },
      'We build software that are scalable and reliable': {
        vi: 'Chào mừng đến với Công ty Phần mềm Acazia',
        en: 'We build software that are scalable and reliable',
      },
      'We enable startups and enterprises to leverage our software development centers which assist in transforming their ideas into successful solutions. Boots your development capabilities by outsourcing mobile and web development to our dedicated developers.': {
        vi: 'Công ty Phần mềm ACAZIA được thành lập vào năm 2015 và kể từ đó đã phát triển thành một nhà cung cấp dịch vụ phát triển phần mềm chuẩn quốc tế với đội ngũ hơn 60 chuyên gia CNTT. Chúng tôi giúp các công ty phát triển nhanh và không bao giờ bị chậm lại.',
        en: 'We enable startups and enterprises to leverage our software development centers which assist in transforming their ideas into successful solutions. Boots your development capabilities by outsourcing mobile and web development to our dedicated developers.',
      },
      'Happy Clients': {
        vi: 'Khách hàng hài lòng',
        en: 'Happy Clients',
      },
      'In-House Talent': {
        vi: 'Nhân viên',
        en: 'In-House Talent',
      },
      'Years on the Market': {
        vi: 'Năm trên thị trường',
        en: 'Years on the Market',
      },
      'All The Services Rendered by Our Company.': {
        vi: 'Các dịch vụ chúng tôi cung cấp.',
        en: 'All The Services Rendered by Our Company.',
      },
      'Find out more': {
        vi: 'Tìm hiểu thêm',
        en: 'Find out more',
      },
      'We deliver bespoke using our agile, solution - focused approach, leveraging mainstream and emerging technologies to build custom software products that are robust, scalable and secure.': {
        vi: 'Chúng tôi cung cấp dịch vụ phát triển trọn gói sản phẩm phần mềm theo yêu cầu của khách hàng bằng cách sử dụng phương pháp tiếp cận tiên tiến, tập trung vào giải pháp tốt, tận dụng các công nghệ mới nhất để thúc đẩy xây dựng các sản phẩm giá trị cao, có thể mở rộng và an toàn.',
        en: 'We deliver bespoke using our agile, solution - focused approach, leveraging mainstream and emerging technologies to build custom software products that are robust, scalable and secure.',
      },
      'Business process': {
        vi: 'Tư vấn giải pháp phần mềm cho doanh nghiệp',
        en: 'Business process',
      },
      'We help you design solutions for transformation by automating your processes to shape your company\'s future and drive business growth with the right mix of people, processes and technologies.': {
        vi: 'Chúng tôi tư vấn để giúp bạn thiết kế các giải pháp chuyển đổi số cho doanh nghiệp mình bằng cách tự dộng hoá các quy trình của bạn để định hình tương lai của công ty và thúc đẩy tăng tưởng kinh doanh với sự kết hợp phù hợp của con người, quy trình và công nghệ.',
        en: 'We help you design solutions for transformation by automating your processes to shape your company\'s future and drive business growth with the right mix of people, processes and technologies.',
      },
      'Maintenance support': {
        vi: 'Hỗ trợ bảo trì',
        en: 'Maintenance support',
      },
      'Scrupulously staying on top of your applications with scheduled time for in-depth diagnostics and smoothly executed revisions helps you serve your customers better.': {
        vi: 'Cùng với đội ngũ chuyên gia nhiều kinh nghiệm của chúng tôi để tạo ra các ứng dụng trò chơi tuyệt vời giúp bạn tăng thêm thu nhập.',
        en: 'Scrupulously staying on top of your applications with scheduled time for in-depth diagnostics and smoothly executed revisions helps you serve your customers better.',
      },
      'Quality assurance': {
        vi: 'Đảm bảo chất lượng',
        en: 'Quality assurance',
      },
      'Our advanced technical expertise combines with agile, intelligent and automated testing and QA processes to systematically evaluate, enhance and refine throughout the development process.': {
        vi: 'Chúng tôi cung cấp các chuyên gia kiểm thử có chuyên môn / kỹ thuật cao kết hợp với những phương pháp kiểm thử tự động thông minh, linh động và quy trình đảm bảo chất lượng đánh giá, nâng cao và tinh chỉnh một cách có hệ thống trong suốt quá trình phát triển.',
        en: 'Our advanced technical expertise combines with agile, intelligent and automated testing and QA processes to systematically evaluate, enhance and refine throughout the development process.',
      },
      'Complete package': {
        vi: 'Gói hoàn chỉnh',
        en: 'Complete package',
      },
      'From product design to software continuous delivery': {
        vi: 'Từ thiết kế sản phẩm đến phân phối liên tục phần mềm',
        en: 'From product design to software continuous delivery',
      },
      'Web Development': {
        vi: 'Phát triển web',
        en: 'Web Development',
      },
      'Real-time web applications that grow with your business': {
        vi: 'Các ứng dụng web UX/UI tốt, ổn định, bảo mật sẽ làm tăng giá trị doanh nghiệp của bạn',
        en: 'Real-time web applications that grow with your business',
      },
      'Modern solution for creating scalable network applications': {
        vi: 'Có tốc độ xử lý nhanh nhờ cơ chế xử lý bất đồng bộ (non-blocking) dễ dàng xử lý hàng ngàn kết nối trong khoảng thời gian ngắn nhất. Giúp bạn dễ dàng mở rộng khi có nhu cầu',
        en: 'Modern solution for creating scalable network applications',
      },
      'Reliable PHP framework for building enterprise-grade systems': {
        vi: 'Một nền tảng đáng tin cậy để xây dựng các hệ thống từ nhỏ đến lớn',
        en: 'Reliable PHP framework for building enterprise-grade systems',
      },
      'User-centred JavaScript framework for crafting real-time interfaces': {
        vi: 'Nền tảng Js mới nhất làm tăng tính tương tác và trải nghiệm người dùng cho ứng dụng của bạn',
        en: 'User-centred JavaScript framework for crafting real-time interfaces',
      },
      'Scalable and secure architecture based on AWS cloud solutions': {
        vi: 'Sử dụng các giải pháp đám mây của Amazon (AWS) để tạo kiến trúc ổn định và bảo mật',
        en: 'Scalable and secure architecture based on AWS cloud solutions',
      },
      'Mobile development': {
        vi: 'Phát triển Mobile Apps',
        en: 'Mobile development',
      },
      'Beautiful &amp; engaging iOS and Android apps in one go - built with React Native': {
        vi: 'Các ứng dụng mobile hoàn hảo được xây dựng bằng công nghệ mới nhất: Swift, Kotlin, Flutter, React Native,...',
        en: 'Beautiful &amp; engaging iOS and Android apps in one go - built with React Native',
      },
      'Digital product design': {
        vi: 'Thiết kế',
        en: 'Digital product design',
      },
      'Complete digital creations - from UX prototyping to final UI designs': {
        vi: 'Thực hiện các sáng tạo kỹ thuật số - từ tạo mẫu UX đến thiết kế giao diện người dùng cuối cùng',
        en: 'Complete digital creations - from UX prototyping to final UI designs',
      },
      'What clients say': {
        vi: 'Khách hàng của chúng tôi nói gì',
        en: 'What clients say',
      },
      'People seem to like what we do.': {
        vi: 'Mọi người dường như thích những gì chúng tôi làm.',
        en: 'People seem to like what we do.',
      },
      'Tan has been great to work with. He goes the extra mile and is 100% committed to making sure my goals are met. I would recommend Tan for web development and especially php programming.': {
        vi: 'Thật tuyệt vời khi được làm việc cùng Tân. Anh ấy rất có tầm nhìn và tất cả mục tiêu của tôi luôn được thực hiện với cam kết chắc chắn 100% từ anh. Tìm đến Tân là một quyết định tuyệt vời cho bạn khi phát triển web, đặc biệt là PHP.',
        en: 'Tan has been great to work with. He goes the extra mile and is 100% committed to making sure my goals are met. I would recommend Tan for web development and especially php programming.',
      },
      'Software Engineer': {
        vi: 'Kỹ sư phần mềm',
        en: 'Software Engineer',
      },
      'Amazing people! They are people who are not only following the tasks, but can work as a team. Together.': {
        vi: 'Những con người tuyệt vời! Họ là những người không chỉ quan tâm đến nhiệm vụ cá nhân mà còn làm việc nhóm rất tốt, luôn cùng nhau tạo ra sản phẩm chất lượng nhất cho khách hàng.',
        en: 'Amazing people! They are people who are not only following the tasks, but can work as a team. Together.',
      },
      'Development Manager': {
        vi: 'Quản lý phát triển',
        en: 'Development Manager',
      },
      'I have known Mr Tan for quite some time, having worked together with him in one of projects. He demonstrated his great management skills. He was always willing to help out other team members. I believe that he will be a precious asset to any project he joins.': {
        vi: 'Tôi biết anh Tân khá lâu, đã làm việc cùng anh ấy trong một vài dự án. Tôi nhận thấy kỹ năng quản lý tuyệt vời của anh và tinh thần luôn sẵn lòng giúp đỡ các thành viên khác trong nhóm. Tôi tin rằng anh ấy sẽ là một tài sản quý giá cho bất kỳ dự án nào anh ấy tham gia.',
        en: 'I have known Mr Tan for quite some time, having worked together with him in one of projects. He demonstrated his great management skills. He was always willing to help out other team members. I believe that he will be a precious asset to any project he joins.',
      },
      'Ngoc Duyen Tran': {
        vi: 'Trần Ngọc Duyên',
        en: 'Ngoc Duyen Tran',
      },
      'Business Analyst': {
        vi: 'Chuyên viên phân tích nghiệp vụ',
        en: 'Business Analyst',
      },
      'Tan has helped create great looking sites for us/me. He is always available and ready to help.': {
        vi: 'Tân đã giúp chúng tôi có những trang web tuyệt vời. Nó không chỉ đơn thuần về mặt kỹ thuật mà còn là tinh thần nhiệt tình, sẵn sàng hỗ trợ khi chúng tôi cần.',
        en: 'Tan has helped create great looking sites for us/me. He is always available and ready to help.',
      },
      'Technology-focused individual': {
        vi: 'Chuyên viên công nghệ',
        en: 'Technology-focused individual',
      },
      'I work with Tan in our mobile software development projects and Tan always try hard to keep things done with high quality. His diligence and expertise helps us more than what we expected. Thanks Tan and I proudly to recommend you to all of my friends and partners.': {
        vi: 'Tôi làm việc với Tân trong các dự án phát triển phần mềm trên điện thoại di động. Tân luôn cố gắng hoàn thành công việc với chất lượng cao. Sự siêng năng và chuyên môn của anh ấy giúp chúng tôi nhiều hơn những gì chúng tôi mong đợi. Cảm ơn Tân và tôi tự hào được giới thiệu bạn với tất cả bạn bè và đối tác của tôi.',
        en: 'I work with Tan in our mobile software development projects and Tan always try hard to keep things done with high quality. His diligence and expertise helps us more than what we expected. Thanks Tan and I proudly to recommend you to all of my friends and partners.',
      },
      'CEO at SynerWork Incorporated': {
        vi: 'Giám đốc điều hành tại SynerWork Incorporated',
        en: 'CEO at SynerWork Incorporated',
      },
      'What do you want to achieve?': {
        vi: 'Bạn muốn đạt được những gì?',
        en: 'What do you want to achieve?',
      },
      'Send us a message': {
        vi: 'Gửi tin nhắn',
        en: 'Send us a message',
      },
      'Or contacts us directly at': {
        vi: 'Hoặc liên hệ trực tiếp với chúng tôi tại',
        en: 'Or contacts us directly at',
      },
      'This site is protected by reCAPTCHA and the Google': {
        vi: 'Trang web này được bảo vệ bởi reCAPTCHA và Google về',
        en: 'This site is protected by reCAPTCHA and the google',
      },
      'Privacy Policy': {
        vi: 'Chính sách quyền riêng tư',
        en: 'Privacy Policy',
      },
      'and': {
        vi: 'và',
        en: 'and',
      },
      'Terms of Service': {
        vi: 'Điều khoản dịch vụ',
        en: 'Terms of Service',
      },
      'We’ll get back to you in 24 hours': {
        vi: 'Chúng tôi sẽ liên hệ lại với bạn trong vòng 24h',
        en: 'We’ll get back to you in 24 hours',
      },
      'To get to know each other and address your needs as quick as possible.': {
        vi: 'Để tìm hiểu nhau và giải quyết nhu cầu của bạn càng nhanh càng tốt.',
        en: 'To get to know each other and address your needs as quick as possible.',
      },
      'We\'ll work together on possible scenarios': {
        vi: 'Chúng tôi sẽ làm việc cùng nhau trên các kịch bản có thể xảy ra',
        en: 'We\'ll work together on possible scenarios',
      },
      'For the software development strategy in sync with your goals.': {
        vi: 'Đối với chiến lược phát triển phần mềm để đồng bộ với các mục tiêu của bạn ',
        en: 'For the software development strategy in sync with your goals.',
      },
      'We’ll turn the strategy into an actionable plan': {
        vi: 'Chúng tôi sẽ biến chiến lược thành một kế hoạch có thể hành động',
        en: 'We’ll turn the strategy into an actionable plan',
      },
      'And provide you with experienced development teams to execute it.': {
        vi: 'Và cung cấp cho bạn đội ngũ phát triển có kinh nghiệm để thực hiện nó.',
        en: 'And provide you with experienced development teams to execute it.',
      },
      'Acazia Software Company': {
        vi: 'Công ty Phần mềm Acazia',
        en: 'Acazia Software Company',
      },
      'Headquarters': {
        vi: 'Trụ sở',
        en: 'Headquarters',
      },
      '#57/66 Ngoc Lam St., Long Bien Dist, Hanoi, Vietnam': {
        vi: '#57/66 đường Ngọc Lâm, Q. Long Biên, TP. Hà Nội, Việt Nam',
        en: '#57/66 Ngoc Lam St., Long Bien Dist, Hanoi, Vietnam',
      },
      'Development Center': {
        vi: 'Trung tâm phát triển',
        en: 'Development Center',
      },
      '2nd floor, No.34 Giang Van Minh stress, Ba Dinh district, Hanoi': {
        vi: 'Tầng 2, số 34 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Tp Hà Nội',
        en: '2nd floor, No.34 Giang Van Minh stress, Ba Dinh district, Hanoi',
      },
      'Let’s shape the future together!': {
        vi: 'Hãy cùng nhau kiến tạo tương lai!',
        en: 'Let’s shape the future together!',
      },
      'Tell us about your project, book a free session and see if we can work together. It\'s so easy.': {
        vi: 'Hãy cho chúng tôi biết về dự án của bạn, đặt một buổi họp miễn phí và xem liệu chúng ta có thể làm việc cùng nhau hay không. Nó rất đơn giản.',
        en: 'Tell us about your project, book a free session and see if we can work together. It\'s so easy.',
      },
      'Contact Us': {
        vi: 'Đặt lịch tư vấn',
        en: 'Contact Us',
      },
      'Accerditation': {
        vi: 'Kiểm định',
        en: 'Accerditation',
      },
      'Useful links': {
        vi: 'Liên kết hữu ích',
        en: 'Useful links',
      },
      'Careers': {
        vi: 'Cơ hội nghề nghiệp',
        en: 'Careers',
      },
      'Acazia Insider': {
        vi: 'Văn hoá Acazia',
        en: 'Acazia Insider',
      },
      'Life @ Acaziaser': {
        vi: 'Văn hoá Acazia',
        en: 'Life @ Acaziaser',
      },
      'Term of Service': {
        vi: 'Điều khoản dịch vụ',
        en: 'Term of Service',
      },
      'Contacts': {
        vi: 'Liên lạc',
        en: 'Contacts',
      },
      'Our Location': {
        vi: 'Địa điểm của chúng tôi',
        en: 'Our Location',
      },
      'Social': {
        vi: 'Xã hội',
        en: 'Social',
      },
      '© Copyright': {
        vi: '© Bản quyền',
        en: '© Copyright'
      },
      'At a glance': {
        vi: 'Giới thiệu',
        en: 'At a glance',
      },
      'Acazia Software Company. All rights reserved.': {
        vi: 'Công ty phần mềm Acazia. Đã đăng ký Bản quyền.',
        en: 'Acazia Software Company. All rights reserved.',
      },
      'Language': {
        vi: 'Ngôn ngữ',
        en: 'Language',
      },
      'English': {
        vi: 'Tiếng Anh',
        en: 'English',
      },
      'Vietnamese': {
        vi: 'Tiếng Việt',
        en: 'Vietnamese',
      },
      'Insights': {
        vi: 'Tài nguyên',
        en: 'Insights',
      },
      'All The Services Rendered': {
        vi: 'Tất cả các dịch vụ',
        en: 'All The Services Rendered',
      },
      'Read all articles': {
        vi: 'Đọc tất cả các bài viết',
        en: 'Read all articles',
      },
      'Request an Estimation': {
        vi: 'Nhận báo giá miễn phí',
        en: 'Request an Estimation',
      },
      'Tell us about your project': {
        vi: 'Hãy cho chúng tôi về dự án của bạn',
        en: 'Tell us about your project',
      },
      '1. About your company': {
        vi: '1. Giới thiệu về công ty của bạn',
        en: '1. About your company',
      },
      'Your Name': {
        vi: 'Tên của bạn',
        en: 'Your Name',
      },
      'Your Email': {
        vi: 'Email của bạn',
        en: 'Your Email',
      },
      'Your Company\'s biggest challenge today?': {
        vi: 'Thách thức lớn nhất của Công ty bạn hiện nay?',
        en: 'Your Company\'s biggest challenge today?',
      },
      '2. What do you have in mind?': {
        vi: '2. Ý tưởng của dự án / sản phẩm của bạn là gì?',
        en: '2. What do you have in mind?',
      },
      'Project Description (briefly)': {
        vi: 'Mô tả dự án (ngắn gọn)',
        en: 'Project Description (briefly)',
      },
      '3. Your budget is...': {
        vi: '3. Ngân sách của bạn là...',
        en: '3. Your budget is...',
      },
      'From': {
        vi: 'Từ',
        en: 'From',
      },
      'To': {
        vi: 'Đến',
        en: 'To',
      },
      '4. Expertise': {
        vi: '4. Chuyên môn',
        en: '4. Expertise',
      },
      'Design': {
        vi: 'Thiết kế',
        en: 'Design',
      },
      'Support': {
        vi: 'Hỗ trợ',
        en: 'Support',
      },
      'The right software development partner can change everything.': {
        vi: 'Đối tác phát triển phần mềm phù hợp có thể thay đổi mọi thứ.',
        en: 'The right software development partner can change everything.',
      },
      'We help our clients to scale up by providing them with agile software development teams.': {
        vi: 'Chúng tôi giúp khách hàng mở rộng quy mô bằng cách cung cấp cho họ các nhân viên phát triển phần mềm tài năng.',
        en: 'We help our clients to scale up by providing them with agile software development teams.',
      },
      'Our vision': {
        vi: 'Tầm nhìn',
        en: 'Our vision',
      },
      'Acazia Software will actively participate in creating a positive future for out clients. To be a trusly partner, not just a provider and unblock business potenial through technology and our experts. Think Offshore. Think Acazia !': {
        vi: 'Công ty phần mềm Acazia sẽ tích cực tham gia vào việc tạo ra một tương lai tích cực cho các khách hàng trên toàn thế giới. Trở thành một đối tác, không chỉ là một nhà cung cấp và mở ra tiềm năng kinh doanh thông qua công nghệ và các nhân sự chuyên môn cao.',
        en: 'Acazia Software will actively participate in creating a positive future for out clients. To be a trusly partner, not just a provider and unblock business potenial through technology and our experts. Think Offshore. Think Acazia !',
      },
      'We will fulfil our obligation of building a better, stronger company for future generations, growing the Acazia brand, developing our people, helping improve communities and meeting our commitment to stakeholders.': {
        vi: 'Chúng tôi sẽ thực hiện nghĩa vụ của mình là xây dựng một công ty tốt hơn, vững mạnh hơn cho các thế hệ tương lai, phát triển thương hiệu Acazia, phát triển con người của chúng tôi, giúp cải thiện cộng đồng và đáp ứng cam kết của chúng tôi với các bên liên quan.',
        en: 'We will fulfil our obligation of building a better, stronger company for future generations, growing the Acazia brand, developing our people, helping improve communities and meeting our commitment to stakeholders.',
      },
      'Our ambition is to build a technology company that positively affects people’s lives.': {
        vi: 'Tham vọng của chúng tôi là xây dựng một công ty công nghệ có ảnh hưởng tích cực đến cuộc sống của mọi người.',
        en: 'Our ambition is to build a technology company that positively affects people’s lives.',
      },
      'Our approach': {
        vi: 'Cách tiếp cận',
        en: 'Our approach',
      },
      'We don’t just build it for you. We build it with you.': {
        vi: 'Chúng tôi không chỉ xây dựng sản phẩm cho bạn. Chúng tôi xây dựng nó với bạn.',
        en: 'We don’t just build it for you. We build it with you.',
      },
      'When it comes to our clients, consider ourselves an extension of your team, aligning ourselves with your business mission, values, culture and processes. Transparency and communication are key to the success of long-term, productive partnerships - so we always build trusting relationships where questions and issues are addressed openly and directly.': {
        vi: 'Khi nói đến khách hàng của chúng tôi, hãy coi mình là một phần mở rộng của nhóm của bạn, tự điều chỉnh để phù hợp với sứ mệnh, giá trị, văn hóa và quy trình kinh doanh của khách hàng. Tính minh bạch và giao tiếp là chìa khóa thành công của quan hệ đối tác lâu dài và hiệu quả - vì vậy chúng tôi luôn xây dựng mối quan hệ tin cậy nơi các câu hỏi được tiếp thu và vấn đề của khách hàng được giải quyết cởi mở và trực tiếp.',
        en: 'When it comes to our clients, consider ourselves an extension of your team, aligning ourselves with your business mission, values, culture and processes. Transparency and communication are key to the success of long-term, productive partnerships - so we always build trusting relationships where questions and issues are addressed openly and directly.',
      },
      'Our history': {
        vi: 'Lịch sử',
        en: 'Our history',
      },
      'Agile then and more so now': {
        vi: 'Luôn phát triển theo từng năm ',
        en: 'Agile then and more so now',
      },
      'Acazia Software\'s vision to create a company driven to provide an exceptional, unrivalled level of service means we set out to hire the best brightest minds in the industry.': {
        vi: 'Tầm nhìn của ACAZIA SOFTWARE về việc tạo ra một công ty được định hướng để cung cấp một mức độ dịch vụ vượt trội, không đối thủ có nghĩa là chúng tôi đặt ra để thuê những bộ óc sáng suốt nhất trong ngành.',
        en: 'Acazia Software\'s vision to create a company driven to provide an exceptional, unrivalled level of service means we set out to hire the best brightest minds in the industry.',
      },
      'We opened our first development center in Hanoi and have grown organically to become the large technology solutions company in Vietnam.': {
        vi: 'Chúng tôi đã mở trung tâm phát triển đầu tiên tại Hà Nội và đã phát triển một cách hữu cơ để trở thành công ty cung cấp giải pháp công nghệ lớn tại Việt Nam.',
        en: 'We opened our first development center in Hanoi and have grown organically to become the large technology solutions company in Vietnam.',
      },
      'Our team': {
        vi: 'Đội ngũ của chúng tôi',
        en: 'Our team',
      },
      'Tan Le': {
        vi: 'Lê Tân',
        en: 'Tan Le',
      },
      'Founder / CEO': {
        vi: 'Nhà sáng lập / Giám đốc điều hành',
        en: 'Founder / CEO',
      },
      'Trang Vu': {
        vi: 'Vũ Trang',
        en: 'Trang Vu',
      },
      'Back Office Manager': {
        vi: 'Quản lý hành chính nhân sự',
        en: 'Back Office Manager',
      },
      'Hue Tong': {
        vi: 'Tống Huệ',
        en: 'Hue Tong',
      },
      'Account Manager': {
        vi: 'Quản lý tài khoản',
        en: 'Account Manager',
      },
      'Nhan Bui': {
        vi: 'Bùi Nhàn',
        en: 'Nhan Bui',
      },
      'Hiring Manager': {
        vi: 'Quản lý tuyển dụng',
        en: 'Hiring Manager',
      },
      'Phu Nguyen': {
        vi: 'Nguyễn Phú',
        en: 'Phu Nguyen',
      },
      'Delivery Manager': {
        vi: 'Quản lý phân phối',
        en: 'Delivery Manager',
      },
      'Van Dang': {
        vi: 'Đặng Vân',
        en: 'Van Dang',
      },
      'Project Manager / QC Leader': {
        vi: 'Quản lý dự án / Quản lý chất lượng',
        en: 'Project Manager / QC Leader',
      },
      'Quang Tran': {
        vi: 'Trần Quang',
        en: 'Quang Tran',
      },
      'Mobile Technical Leader': {
        vi: 'Trưởng nhóm kỹ thuật Mobile',
        en: 'Mobile Technical Leader',
      },
      'Hiep Hoang': {
        vi: 'Hoàng Hiệp',
        en: 'Hiep Hoang',
      },
      'Backend Technical Leader': {
        vi: 'Trưởng nhóm kỹ thuật Backend',
        en: 'Backend Technical Leader',
      },
      'Thanh Nguyen': {
        vi: 'Nguyễn Thành',
        en: 'Thanh Nguyen',
      },
      'Backend Technical Leader': {
        vi: 'Trưởng nhóm kỹ thuật Backend',
        en: 'Backend Technical Leader',
      },
      'Truong Pham': {
        vi: 'Phạm Trường',
        en: 'Truong Pham',
      },
      'Quan Nguyen': {
        vi: 'Nguyễn Quân',
        en: 'Quan Nguyen',
      },
      'Nguyen Le': {
        vi: 'Lê Nguyện',
        en: 'Nguyen Le',
      },
      'Frontend Technical Leader': {
        vi: 'Trưởng nhóm kỹ thuật Frontend',
        en: 'Frontend Technical Leader',
      },
      'Behind every great work is a great team': {
        vi: 'Đằng sau mỗi ứng dụng tốt chúng tôi làm là một đội ngũ tuyệt vời',
        en: 'Behind every great work is a great team',
      },
      'Autonomy &amp; collaboration': {
        vi: 'Tự chủ và cộng tác',
        en: 'Autonomy &amp; collaboration',
      },
      'Being a small team we need every team member to act like a leader in their area. We push each of us to stay proactive and drive projects forward. While working independently each of us collaborates and supports other. Hard work focused on results.': {
        vi: 'Là một nhóm nhỏ, chúng tôi cần mọi thành viên trong nhóm hành động như một nhà lãnh đạo trong khu vực của họ. Chúng tôi thúc đẩy mỗi người chúng ta luôn chủ động và thúc đẩy các dự án về phía trước. Trong khi làm việc độc lập, mỗi chúng tôi sẽ cộng tác và hỗ trợ những người khác. Làm việc chăm chỉ tập trung vào kết quả.',
        en: 'Being a small team we need every team member to act like a leader in their area. We push each of us to stay proactive and drive projects forward. While working independently each of us collaborates and supports other. Hard work focused on results.',
      },
      'Growth': {
        vi: 'Sự phát triển',
        en: 'Growth',
      },
      'We expect personal and professional growth from each of us. From learning a new tool or talking bigger responsibilities, we help and provide support for stretching ourselves and leaving our combat zone.': {
        vi: 'Chúng tôi mong đợi sự phát triển cá nhân và nghề nghiệp từ mỗi chúng tôi. Từ việc học một công cụ mới hay trao đổi những trách nhiệm lớn hơn, chúng tôi giúp đỡ và hỗ trợ cho việc vươn mình và rời khỏi khu vực chiến đấu.',
        en: 'We expect personal and professional growth from each of us. From learning a new tool or talking bigger responsibilities, we help and provide support for stretching ourselves and leaving our combat zone.',
      },
      'Openness': {
        vi: 'Sự cởi mở',
        en: 'Openness',
      },
      'No matter how many projects we have delivered, we always have so many thing to learn,  so it\'s important to remember it and keep your egos small. We keep ourselves opened to critique, positive and optimistic.': {
        vi: 'Bất kể chúng ta đã giao bao nhiêu dự án, chúng ta luôn có rất nhiều điều để học hỏi, vì vậy điều quan trọng là phải ghi nhớ nó và giữ cho cái tôi của bạn nhỏ lại. Chúng tôi luôn cởi mở với những lời phê bình, tích cực và lạc quan.',
        en: 'No matter how many projects we have delivered, we always have so many thing to learn,  so it\'s important to remember it and keep your egos small. We keep ourselves opened to critique, positive and optimistic.',
      },
      'Looking for a reliable software development partner?': {
        vi: 'Tìm kiếm một đối tác phát triển phần mềm đáng tin cậy?',
        en: 'Looking for a reliable software development partner?',
      },
      'Find out how we can help you': {
        vi: 'Hãy tìm hiểu chúng tôi, chúng tôi có thể giúp đỡ bạn',
        en: 'Find out how we can help you',
      },
      'Let\'s get in touch': {
        vi: 'Liên lạc với chúng tôi',
        en: 'Let\'s get in touch',
      },
      'Build your app from scratch or extend your capabilities': {
        vi: 'Xây dựng ứng dụng của bạn từ đầu hoặc mở rộng khả năng của bạn',
        en: 'Build your app from scratch or extend your capabilities',
      },
      'Acazia software experienced team can build you a complex software system across multiple platforms.': {
        vi: 'Đội ngũ giàu kinh nghiệm về phần mềm Acazia có thể xây dựng cho bạn một hệ thống phần mềm phức tạp trên nhiều nền tảng.',
        en: 'Acazia software experienced team can build you a complex software system across multiple platforms.',
      },
      'Contact us today': {
        vi: 'Liên hệ với chúng tôi hôm nay',
        en: 'Contact us today',
      },
      'End-to-end engineering': {
        vi: 'Kỹ thuật đầu - cuối',
        en: 'End-to-end engineering',
      },
      'Technology advances have opened multiple avenues for software development, which is why your technology partner needs to see the big picture.': {
        vi: 'Tiến bộ công nghệ đã mở ra nhiều con đường cho phát triển phần mềm, đó là lý do tại sao đối tác công nghệ của bạn cần nhìn thấy bức tranh toàn cảnh.',
        en: 'Technology advances have opened multiple avenues for software development, which is why your technology partner needs to see the big picture.',
      },
      'We deliver bespoke using our agile, solution-focused approach, leveraging mainstream and emerging technologies to build custom software products that are robust, scalable and secure.': {
        vi: 'Chúng tôi cung cấp sản phẩm theo yêu cầu bằng cách sử dụng phương pháp tiếp cận nhanh nhẹn, tập trung vào giải pháp, tận dụng các công nghệ chính và mới nổi để xây dựng sản phẩm phần mềm tùy chỉnh mạnh mẽ, có thể mở rộng và an toàn.',
        en: 'We deliver bespoke using our agile, solution-focused approach, leveraging mainstream and emerging technologies to build custom software products that are robust, scalable and secure.',
      },
      'Web development': {
        vi: 'Phát triển web',
        en: 'Web development',
      },
      'We specialise in building and maintaining secure, user-friendly custom web applications that are optimised for intuitive and immersive user experiences. Built-in flexibility and rich, engaging functionality are backed up by rigorous testing and world-class quality assurance.': {
        vi: 'Chúng tôi chuyên xây dựng và duy trì các ứng dụng web tùy chỉnh an toàn, thân thiện với người dùng được tối ưu hóa cho trải nghiệm người dùng trực quan và phong phú. Tính linh hoạt và chức năng phong phú, hấp dẫn được tích hợp sẵn được hỗ trợ bởi thử nghiệm nghiêm ngặt và đảm bảo chất lượng đẳng cấp thế giới.',
        en: 'We specialise in building and maintaining secure, user-friendly custom web applications that are optimised for intuitive and immersive user experiences. Built-in flexibility and rich, engaging functionality are backed up by rigorous testing and world-class quality assurance.',
      },
      'Software architecture': {
        vi: 'Kiến trúc phần mềm',
        en: 'Software architecture',
      },
      'The right software architecture ensures scalability, agility and performance. Our software architecture specialists combine proven processes and innovative technologies to optimise your software for future success.': {
        vi: 'Kiến trúc phần mềm phù hợp đảm bảo khả năng mở rộng, nhanh nhẹn và hiệu suất. Các chuyên gia kiến ​​trúc phần mềm của chúng tôi kết hợp các quy trình đã được chứng minh và công nghệ tiên tiến để tối ưu hóa phần mềm của bạn nhằm đạt được thành công trong tương lai.',
        en: 'The right software architecture ensures scalability, agility and performance. Our software architecture specialists combine proven processes and innovative technologies to optimise your software for future success.',
      },
      'Mobile app development': {
        vi: 'Phát triển ứng dụng di động',
        en: 'Mobile app development',
      },
      'We offer the full lifecycle from design to ongoing maintenance of both hybrid and native applications across all platforms. Solutions are custom-built from the ground up to perfectly match your business strategy and audience needs. Turn your inspiration into reality through next-gen UX and enterprise-level scalability.': {
        vi: 'Chúng tôi cung cấp toàn bộ vòng đời từ thiết kế đến bảo trì liên tục của cả ứng dụng lai và ứng dụng gốc trên tất cả các nền tảng. Các giải pháp được tùy chỉnh xây dựng từ đầu để hoàn toàn phù hợp với chiến lược kinh doanh và nhu cầu của đối tượng. Biến cảm hứng của bạn thành hiện thực thông qua UX thế hệ tiếp theo và khả năng mở rộng cấp doanh nghiệp.',
        en: 'We offer the full lifecycle from design to ongoing maintenance of both hybrid and native applications across all platforms. Solutions are custom-built from the ground up to perfectly match your business strategy and audience needs. Turn your inspiration into reality through next-gen UX and enterprise-level scalability.',
      },
      'Software analysis and design': {
        vi: 'Phân tích và thiết kế phần mềm',
        en: 'Software analysis and design',
      },
      'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.': {
        vi: 'Chúng tôi thực hiện phân tích có hệ thống và rõ ràng về các yêu cầu kinh doanh của bạn và thiết kế phần mềm tùy chỉnh phù hợp cụ thể với nhu cầu hiện tại và tương lai của bạn. Điều này đảm bảo các giải pháp dựa trên giá trị kinh doanh thực tế và liên tục, chất lượng và chức năng làm nền tảng cho việc phân phối thành công.',
        en: 'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.',
      },
      'Software engineering': {
        vi: 'Kỹ thuật phần mềm',
        en: 'Software engineering',
      },
      'We build custom software solutions that adapt and scale with your business to ignite innovation and drive growth. Get access to cutting-edge technologies and two decades of engineering excellence to keep pace with rapidly changing tech and retain your competitive edge.': {
        vi: 'Chúng tôi xây dựng các giải pháp phần mềm tùy chỉnh phù hợp và mở rộng quy mô với doanh nghiệp của bạn để thúc đẩy sự đổi mới và thúc đẩy tăng trưởng. Tiếp cận với các công nghệ tiên tiến và kỹ thuật xuất sắc trong hai thập kỷ để bắt kịp với công nghệ đang thay đổi nhanh chóng và duy trì lợi thế cạnh tranh của bạn.',
        en: 'We build custom software solutions that adapt and scale with your business to ignite innovation and drive growth. Get access to cutting-edge technologies and two decades of engineering excellence to keep pace with rapidly changing tech and retain your competitive edge.',
      },
      'System integration': {
        vi: 'Hệ thống tích hợp',
        en: 'System integration',
      },
      'The right software architecture ensures scalability, agility and performance. Our software architecture specialists combine proven processes and innovative technologies to optimise your software for future success.': {
        vi: 'Kiến trúc phần mềm phù hợp đảm bảo khả năng mở rộng, nhanh nhẹn và hiệu suất. Các chuyên gia kiến ​​trúc phần mềm của chúng tôi kết hợp các quy trình đã được chứng minh và công nghệ tiên tiến để tối ưu hóa phần mềm của bạn nhằm đạt được thành công trong tương lai.',
        en: 'The right software architecture ensures scalability, agility and performance. Our software architecture specialists combine proven processes and innovative technologies to optimise your software for future success.',
      },
      'DevOps services': {
        vi: 'Dịch vụ DevOps',
        en: 'DevOps services',
      },
      'We offer the full lifecycle from design to ongoing maintenance of both hybrid and native applications across all platforms. Solutions are custom-built from the ground up to perfectly match your business strategy and audience needs. Turn your inspiration into reality through next-gen UX and enterprise-level scalability.': {
        vi: 'Chúng tôi cung cấp toàn bộ vòng đời từ thiết kế đến bảo trì liên tục của cả ứng dụng lai và ứng dụng gốc trên tất cả các nền tảng. Các giải pháp được tùy chỉnh xây dựng từ đầu để hoàn toàn phù hợp với chiến lược kinh doanh và nhu cầu của đối tượng. Biến cảm hứng của bạn thành hiện thực thông qua UX thế hệ tiếp theo và khả năng mở rộng cấp doanh nghiệp.',
        en: 'We offer the full lifecycle from design to ongoing maintenance of both hybrid and native applications across all platforms. Solutions are custom-built from the ground up to perfectly match your business strategy and audience needs. Turn your inspiration into reality through next-gen UX and enterprise-level scalability.',
      },
      'Application modernisation': {
        vi: 'Ứng dụng hiện đại hóa',
        en: 'Application modernisation',
      },
      'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.': {
        vi: 'Chúng tôi thực hiện phân tích có hệ thống và rõ ràng về các yêu cầu kinh doanh của bạn và thiết kế phần mềm tùy chỉnh phù hợp cụ thể với nhu cầu hiện tại và tương lai của bạn. Điều này đảm bảo các giải pháp dựa trên giá trị kinh doanh thực tế và liên tục, chất lượng và chức năng làm nền tảng cho việc phân phối thành công.',
        en: 'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.',
      },
      'Adaptive Development Services': {
        vi: 'Dịch vụ phát triển thích ứng',
        en: 'Adaptive Development Services',
      },
      'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.': {
        vi: 'Chúng tôi thực hiện phân tích có hệ thống và rõ ràng về các yêu cầu kinh doanh của bạn và thiết kế phần mềm tùy chỉnh phù hợp cụ thể với nhu cầu hiện tại và tương lai của bạn. Điều này đảm bảo các giải pháp dựa trên giá trị kinh doanh thực tế và liên tục, chất lượng và chức năng làm nền tảng cho việc phân phối thành công.',
        en: 'We undertake systematic and unambiguous analysis of your business requirements and design custom software aligned specifically to your present and future needs. This ensures solutions are based upon real and continuous business value, quality and functionality that underpins successful delivery.',
      },
      'Transforming your business': {
        vi: 'Chuyển đổi doanh nghiệp của bạn',
        en: 'Transforming your business',
      },
      'We help you design solutions for transformation by automating your processes to shape your company’s future and drive business growth with the right mix of people, processes and technologies.': {
        vi: 'Chúng tôi giúp bạn thiết kế các giải pháp chuyển đổi bằng cách tự động hóa các quy trình để định hình tương lai của công ty và thúc đẩy sự phát triển kinh doanh với sự kết hợp phù hợp giữa con người, quy trình và công nghệ.',
        en: 'We help you design solutions for transformation by automating your processes to shape your company’s future and drive business growth with the right mix of people, processes and technologies.',
      },
      'Are your processes slowing down ?': {
        vi: 'Quy trình của bạn có bị chậm lại không?',
        en: 'Are your processes slowing down ?',
      },
      'Our solutions help you increase productivity and effciency, enhance customer experience and reduce costs with our digital workforce and offshore resources. All while maintaining world-class quality standards.': {
        vi: 'Các giải pháp của chúng tôi giúp bạn tăng năng suất và hiệu quả, nâng cao trải nghiệm của khách hàng và giảm chi phí với lực lượng lao động kỹ thuật số và nguồn lực nước ngoài của chúng tôi. Tất cả trong khi vẫn duy trì các tiêu chuẩn chất lượng đẳng cấp thế giới.',
        en: 'Our solutions help you increase productivity and effciency, enhance customer experience and reduce costs with our digital workforce and offshore resources. All while maintaining world-class quality standards.',
      },
      'Business process consulting': {
        vi: 'Tư vấn quy trình kinh doanh',
        en: 'Business process consulting',
      },
      'Automation technology solutions': {
        vi: 'Giải pháp công nghệ tự động hóa',
        en: 'Automation technology solutions',
      },
      'Automation enabled outsourcing': {
        vi: 'Gia công phần mềm cho phép tự động hóa',
        en: 'Automation enabled outsourcing',
      },
      'Support and maintain your software throughout its life cycle': {
        vi: 'Hỗ trợ và duy trì phần mềm của bạn trong suốt vòng đời của nó',
        en: 'Support and maintain your software throughout its life cycle',
      },
      'Increase your business productivity, add more flexibility, scalability and realise cost benefits with your software maintenance and enhancements.': {
        vi: 'Tăng năng suất kinh doanh của bạn, thêm tính linh hoạt, khả năng mở rộng và nhận ra lợi ích chi phí với việc bảo trì và cải tiến phần mềm của bạn.',
        en: 'Increase your business productivity, add more flexibility, scalability and realise cost benefits with your software maintenance and enhancements.',
      },
      'Healthy applications': {
        vi: 'Ứng dụng lành mạnh',
        en: 'Healthy applications',
      },
      'With extensive knowledge and capability, Acazia deliver a flexible support model with high-quality service performance and predictable pricing. We offer fixed term agreements ranging from one to five years.': {
        vi: 'Với kiến ​​thức và năng lực sâu rộng, Acazia cung cấp một mô hình hỗ trợ linh hoạt với hiệu suất dịch vụ chất lượng cao và giá cả có thể đoán trước được. Chúng tôi cung cấp các thỏa thuận có thời hạn cố định từ một đến 5 năm.',
        en: 'With extensive knowledge and capability, Acazia deliver a flexible support model with high-quality service performance and predictable pricing. We offer fixed term agreements ranging from one to five years.',
      },
      'Tasks include performance reports and reviews, small enhancement development, change management, applications patching / hardening and service request fulfilment.': {
        vi: 'Các nhiệm vụ bao gồm báo cáo và đánh giá hiệu suất, phát triển cải tiến nhỏ, quản lý thay đổi, ứng dụng vá / làm cứng ứng dụng và thực hiện yêu cầu dịch vụ.',
        en: 'Tasks include performance reports and reviews, small enhancement development, change management, applications patching / hardening and service request fulfilment.',
      },
      'Software configuration management': {
        vi: 'Quản lý cấu hình phần mềm',
        en: 'Software configuration management',
      },
      'Web administration': {
        vi: 'Quản trị web',
        en: 'Web administration',
      },
      'Content administration': {
        vi: 'Quản trị nội dung',
        en: 'Content administration',
      },
      'System administration': {
        vi: 'Quản trị hệ thống',
        en: 'System administration',
      },
      'Administration of cloud hosted solutions': {
        vi: 'Quản trị các giải pháp được lưu trữ trên đám mây',
        en: 'Administration of cloud hosted solutions',
      },
      'Cloud monitoring and event management': {
        vi: 'Giám sát đám mây và quản lý sự kiện',
        en: 'Cloud monitoring and event management',
      },
      'Database administration': {
        vi: 'Quản lý cơ sở dữ liệu',
        en: 'Database administration',
      },
      'Quality Assurance as a Service': {
        vi: 'Đảm bảo chất lượng như một dịch vụ',
        en: 'Quality Assurance as a Service',
      },
      'Advanced testing using a combination of automation tools, skilled resources and effective test management processes.': {
        vi: 'Kiểm tra nâng cao sử dụng kết hợp các công cụ tự động hóa, tài nguyên có kỹ năng và quy trình quản lý kiểm tra hiệu quả.',
        en: 'Advanced testing using a combination of automation tools, skilled resources and effective test management processes.',
      },
      'End-to-end quality and security': {
        vi: 'Chất lượng đầu - cuối và bảo mật',
        en: 'End-to-end quality and security',
      },
      'Quality Assurance is a key element of every successful software devemopment strategy': {
        vi: 'Đảm bảo chất lượng là yếu tố quan trọng của mọi chiến lược phát triển phần mềm thành công',
        en: 'Quality Assurance is a key element of every successful software devemopment strategy',
      },
      'QA as a Service is a modern way to build QA processes that are tailor-made, scalable and on-demand. Therefore, this model gets more and more attention form tech managers.': {
        vi: 'QA với tư cách là một dịch vụ là một cách hiện đại để xây dựng các quy trình QA được thiết kế riêng, có thể mở rộng và theo yêu cầu. Do đó, mô hình này ngày càng nhận được nhiều sự quan tâm của các nhà quản lý công nghệ.',
        en: 'QA as a Service is a modern way to build QA processes that are tailor-made, scalable and on-demand. Therefore, this model gets more and more attention form tech managers.',
      },
      'QA consulting': {
        vi: 'Tư vấn QA',
        en: 'QA consulting',
      },
      'Web application testing': {
        vi: 'Kiểm tra ứng dụng web',
        en: 'Web application testing',
      },
      'Mobile application testing': {
        vi: 'Thử nghiệm ứng dụng di động',
        en: 'Mobile application testing',
      },
      'Performance testing': {
        vi: 'Kiểm tra năng suất',
        en: 'Performance testing',
      },
      'Security testing': {
        vi: 'Kiểm tra bảo mật',
        en: 'Security testing',
      },
      'Acceptance testing': {
        vi: 'Kiểm tra chấp nhận',
        en: 'Acceptance testing',
      },
      'API testing': {
        vi: 'Thử nghiệm API',
        en: 'API testing',
      },
      'Automation testing': {
        vi: 'Kiểm tra tự động hóa',
        en: 'Automation testing',
      },
      'Apps That Do The Work': {
        vi: 'Ứng dụng hoạt động hiệu quả',
        en: 'Apps That Do The Work',
      },
      'Industries:': {
        vi: 'Ngành nghề:',
        en: 'Industries:',
      },
      'Tech stacks:': {
        vi: 'Công nghệ:',
        en: 'Tech stacks:',
      },
      'HeyMary is an online chatbot platforms that let users design, develop and train chatbots visually. Unlike websites, conversation is a new type of interface that is subjective and difficult to wrap your head around. HeyMary focuses on making conversation tangible and maintainable, thus allow further development for your chatbots in the long run. The platform also comes equipped with tools like broadcasting, audience, analytics, smart training and the ability to integrate your chatbot into your business pipeline.': {
        vi: 'HeyMary là một nền tảng chatbot trực tuyến cho phép người dùng thiết kế, phát triển và đào tạo chatbot một cách trực quan. Không giống như các trang web, cuộc trò chuyện là một loại giao diện mới mang tính chủ quan và rất khó để bạn có thể hiểu được. HeyMary tập trung vào việc làm cho cuộc trò chuyện trở nên hữu hình và có thể duy trì, do đó cho phép phát triển hơn nữa cho các chatbot của bạn trong thời gian dài. Nền tảng này cũng được trang bị các công cụ như phát sóng, khán giả, phân tích, đào tạo thông minh và khả năng tích hợp chatbot vào quy trình kinh doanh của bạn.',
        en: 'HeyMary is an online chatbot platforms that let users design, develop and train chatbots visually. Unlike websites, conversation is a new type of interface that is subjective and difficult to wrap your head around. HeyMary focuses on making conversation tangible and maintainable, thus allow further development for your chatbots in the long run. The platform also comes equipped with tools like broadcasting, audience, analytics, smart training and the ability to integrate your chatbot into your business pipeline.',
      },
      'Marketing': {
        vi: 'Tiếp thị',
        en: 'Marketing',
      },
      'Analytics': {
        vi: 'Phân tích',
        en: 'Analytics',
      },
      'Greenlight Technologies is the leading mobile order ahead and loyalty software solution for the Cannabis Industry. Greenlight allows patients to place reservations to pick up their meds all while earning loyalty points to redeem discounts, deals, and exclusive perks.': {
        vi: 'Greenlight Technologies là giải pháp phần mềm dành cho khách hàng thân thiết và đơn đặt hàng di động hàng đầu cho Ngành Công nghiệp Cần sa. Greenlight cho phép bệnh nhân đặt chỗ trước để nhận tất cả các loại thuốc của họ trong khi kiếm điểm khách hàng thân thiết để đổi lấy chiết khấu, ưu đãi và các đặc quyền dành riêng.',
        en: 'Greenlight Technologies is the leading mobile order ahead and loyalty software solution for the Cannabis Industry. Greenlight allows patients to place reservations to pick up their meds all while earning loyalty points to redeem discounts, deals, and exclusive perks.',
      },
      'Cannabis': {
        vi: 'Cần sa',
        en: 'Cannabis',
      },
      'eCommerce': {
        vi: 'Thương mại điện tử',
        en: 'eCommerce',
      },
      'Loyalty System': {
        vi: 'Hệ thống khách hàng thân thiết',
        en: 'Loyalty System',
      },
      'Drop Delivery is the cannabis industry\'s only all-in-one compliant delivery management platform. The Drop Delivery platform offers advanced technology that empowers business owners to manage inventory, dispatch and driver logistics, marketing tools, digital loyalty programs, and it provides them with their own white-label, e-commerce mobileapp. With Drop Delivery, cannabis businesses can launch their own delivery services within hours. Drop Delivery has raised a total of $1M in funding over 1 round. This was a Equity Crowdfunding round raised on Oct 13, 2020.': {
        vi: 'Drop Delivery là nền tảng quản lý phân phối tuân thủ tất cả trong một duy nhất của ngành công nghiệp cần sa. Nền tảng Drop Delivery cung cấp công nghệ tiên tiến cho phép chủ doanh nghiệp quản lý hàng tồn kho, vận chuyển và hậu cần tài xế, các công cụ tiếp thị, chương trình khách hàng thân thiết kỹ thuật số và nó cung cấp cho họ ứng dụng di động thương mại điện tử nhãn trắng của riêng họ. Với Drop Delivery, các doanh nghiệp cần sa có thể triển khai dịch vụ giao hàng của riêng họ trong vòng vài giờ. Drop Delivery đã quyên góp được tổng cộng 1 triệu đô la Mỹ trong vòng 1 vòng. Đây là vòng Huy động vốn từ cộng đồng bằng vốn chủ sở hữu được huy động vào ngày 13 tháng 10 năm 2020.',
        en: 'Drop Delivery is the cannabis industry\'s only all-in-one compliant delivery management platform. The Drop Delivery platform offers advanced technology that empowers business owners to manage inventory, dispatch and driver logistics, marketing tools, digital loyalty programs, and it provides them with their own white-label, e-commerce mobileapp. With Drop Delivery, cannabis businesses can launch their own delivery services within hours. Drop Delivery has raised a total of $1M in funding over 1 round. This was a Equity Crowdfunding round raised on Oct 13, 2020.',
      },
      'Logistics': {
        vi: 'Luận lý học',
        en: 'Logistics',
      },
      'A TV guide for the social media generation with a patent pending.10 Block is venture-backed by Mogility Capital and is advised by entertainment industry leaders with backgrounds at Universal Studios/NBCU, DreamWorks Animation, Disney, and Paramount Studios.In 2019, SXSW named 10 BLOCK one of ten cutting edge companies. 10 Block hasevolved from a short-form streaming platform with social aspects to a universal discovery tool minus the content, allowing viewers to make playlists, review, discuss content across all television platforms. 10 Block has raised 1 round. This was a Seed round raised on Jul 11, 2016.': {
        vi: 'Hướng dẫn truyền hình cho thế hệ truyền thông xã hội với bằng sáng chế đang chờ cấp bằng sáng chế. 10 Block được hỗ trợ bởi Mogility Capital và được cố vấn bởi các nhà lãnh đạo ngành giải trí có xuất thân tại Universal Studios / NBCU, DreamWorks Animation, Disney và Paramount Studios. Năm 2019, SXSW được đặt tên là 10 BLOCK một trong mười công ty tiên tiến. 10 Block được phát triển từ một nền tảng phát trực tuyến dạng ngắn với các khía cạnh xã hội thành một công cụ khám phá toàn cầu trừ nội dung, cho phép người xem tạo danh sách phát, đánh giá, thảo luận về nội dung trên tất cả các nền tảng truyền hình. Khối 10 đã nâng được 1 hiệp. Đây là vòng Hạt giống được nêu ra vào ngày 11 tháng 7 năm 2016.',
        en: 'A TV guide for the social media generation with a patent pending.10 Block is venture-backed by Mogility Capital and is advised by entertainment industry leaders with backgrounds at Universal Studios/NBCU, DreamWorks Animation, Disney, and Paramount Studios.In 2019, SXSW named 10 BLOCK one of ten cutting edge companies. 10 Block hasevolved from a short-form streaming platform with social aspects to a universal discovery tool minus the content, allowing viewers to make playlists, review, discuss content across all television platforms. 10 Block has raised 1 round. This was a Seed round raised on Jul 11, 2016.',
      },
      'Digital Entertainment': {
        vi: 'Giải trí kỹ thuật số',
        en: 'Digital Entertainment',
      },
      'Digital Media': {
        vi: 'Truyền thông kỹ thuật số',
        en: 'Digital Media',
      },
      'Media and Entertainment': {
        vi: 'Truyền thông và Giải trí',
        en: 'Media and Entertainment',
      },
      'Mobile Apps': {
        vi: 'Ứng dụng di động',
        en: 'Mobile Apps',
      },
      'POSNails Software is a complete nails salon, Vietnamese Nail software, CLoud POS, Web Point Of Sale online and offline for your salon or spa more feature of Nail. It is a Salon Nail Program solution specifically designed to give any size salon of the tools they need in a cash register program at an affordable price.': {
        vi: 'Phần mềm POSNails là một phần mềm làm móng hoàn chỉnh, phần mềm Nail tiếng Việt, CLoud POS, Web Point Of Sale trực tuyến và ngoại tuyến cho tiệm hoặc spa của bạn thêm nhiều tính năng của Nail. Đây là giải pháp Chương trình Làm móng cho Salon được thiết kế đặc biệt để cung cấp cho bất kỳ tiệm nào có quy mô lớn các công cụ họ cần trong chương trình tính tiền với giá cả phải chăng',
        en: 'POSNails Software is a complete nails salon, Vietnamese Nail software, CLoud POS, Web Point Of Sale online and offline for your salon or spa more feature of Nail. It is a Salon Nail Program solution specifically designed to give any size salon of the tools they need in a cash register program at an affordable price.',
      },
      'Beauty': {
        vi: 'Làm đẹp',
        en: 'Beauty',
      },
      'Desktop Apps': {
        vi: 'Ứng dụng máy tính để bàn',
        en: 'Desktop Apps',
      },
      'Spendy Money Tracker is a financial assistant platform that helps people manage their finances in an easy and convenient way. Spendy money tracker is an app dedicated to help you and your friends manage joint account easy.': {
        vi: 'Spendy Money Tracker là một nền tảng hỗ trợ tài chính giúp mọi người quản lý tài chính của mình một cách dễ dàng và thuận tiện. Spendy money tracker là một ứng dụng dành riêng để giúp bạn và bạn bè của bạn quản lý tài khoản chung một cách dễ dàng.',
        en: 'Spendy Money Tracker is a financial assistant platform that helps people manage their finances in an easy and convenient way. Spendy money tracker is an app dedicated to help you and your friends manage joint account easy.',
      },
      'Bill management which provides the users with a bird-eye view of their entire billing history and cycle. This total balance can be used for any kind of transactions, using an in- app scanning feature to pay for transactions. Any transaction throughout the app is recorded and listed. Users can also receive financial advice on switch-and-save product comparison, which can be done seamlessly via the app as well.': {
        vi: 'Quản lý hóa đơn cung cấp cho người dùng cái nhìn tổng thể về toàn bộ lịch sử và chu kỳ thanh toán của họ. Tổng số dư này có thể được sử dụng cho bất kỳ loại giao dịch nào, sử dụng tính năng quét trong ứng dụng để thanh toán cho các giao dịch. Mọi giao dịch trong ứng dụng đều được ghi lại và liệt kê. Người dùng cũng có thể nhận được lời khuyên tài chính về việc so sánh sản phẩm chuyển đổi và tiết kiệm, điều này cũng có thể được thực hiện liền mạch thông qua ứng dụng.',
        en: 'Bill management which provides the users with a bird-eye view of their entire billing history and cycle. This total balance can be used for any kind of transactions, using an in- app scanning feature to pay for transactions. Any transaction throughout the app is recorded and listed. Users can also receive financial advice on switch-and-save product comparison, which can be done seamlessly via the app as well.',
      },
      'Invoice Manage which allows users total control of their entire invoice inventory. Users can view lists of due, overdue and paid invoices as well as adding customers and creating invoices to assign to them. Users can finalize invoices with payment type and share a digital copy of any invoices.': {
        vi: 'Quản lý hóa đơn cho phép người dùng kiểm soát toàn bộ khoảng không quảng cáo hóa đơn của họ. Người dùng có thể xem danh sách các hóa đơn đến hạn, quá hạn và đã thanh toán cũng như thêm khách hàng và tạo hóa đơn để gán cho họ. Người dùng có thể hoàn thiện hóa đơn với hình thức thanh toán và chia sẻ bản sao kỹ thuật số của bất kỳ hóa đơn nào.',
        en: 'Invoice Manage which allows users total control of their entire invoice inventory. Users can view lists of due, overdue and paid invoices as well as adding customers and creating invoices to assign to them. Users can finalize invoices with payment type and share a digital copy of any invoices.',
      },
      'DAKKO Wellbeing is the marketplace that enables access to Health & Financial Wellness services for employees and their families. Employees can access their payslips, connect to bank accounts and view their own transaction history on each connected bank account. Employees will be notified of new payslips, coming payslips and can share their payslips as well downloading a printable pdf of their payslips.': {
        vi: 'DAKKO Wellbeing là thị trường cho phép tiếp cận các dịch vụ Sức khỏe & Sức khỏe Tài chính cho nhân viên và gia đình của họ. Nhân viên có thể truy cập phiếu lương của họ, kết nối với tài khoản ngân hàng và xem lịch sử giao dịch của chính họ trên mỗi tài khoản ngân hàng được kết nối. Nhân viên sẽ được thông báo về bảng lương mới, bảng lương sắp tới và có thể chia sẻ bảng lương của họ cũng như tải xuống bản pdf có thể in được của bảng lương của họ.',
        en: 'DAKKO Wellbeing is the marketplace that enables access to Health & Financial Wellness services for employees and their families. Employees can access their payslips, connect to bank accounts and view their own transaction history on each connected bank account. Employees will be notified of new payslips, coming payslips and can share their payslips as well downloading a printable pdf of their payslips.',
      },
      'Aggregation of a directory of global fintechs, PSD2 and Open Banking compliant organisations.Users can find out information about fintechs, PSD2s and Open Banking compliant organisations across the planets. Representatives of a fintech, PSD2 or an Open Banking compliant organisation can set up their own entry on the directory, providing basic information such as apps offered and services offered by their organisation.': {
        vi: 'Tập hợp danh mục các fintech toàn cầu, PSD2 và các tổ chức tuân thủ Open Banking. Người dùng có thể tìm hiểu thông tin về fintech, PSD2 và các tổ chức tuân thủ Open Banking trên khắp các hành tinh. Đại diện của một fintech, PSD2 hoặc một tổ chức tuân thủ Open Banking có thể thiết lập mục nhập của riêng họ trên danh bạ, cung cấp thông tin cơ bản như các ứng dụng được cung cấp và dịch vụ do tổ chức của họ cung cấp.',
        en: 'Aggregation of a directory of global fintechs, PSD2 and Open Banking compliant organisations.Users can find out information about fintechs, PSD2s and Open Banking compliant organisations across the planets. Representatives of a fintech, PSD2 or an Open Banking compliant organisation can set up their own entry on the directory, providing basic information such as apps offered and services offered by their organisation.',
      },
      'OnOnPay is mobile commerce platform for refilling of mobile credits with loyalty programmes.': {
        vi: 'OnOnPay là nền tảng thương mại di động để nạp lại các khoản tín dụng di động bằng các chương trình khách hàng thân thiết.',
        en: 'OnOnPay is mobile commerce platform for refilling of mobile credits with loyalty programmes.',
      },
      'Telecommunication': {
        vi: 'Viễn Thông',
        en: 'Telecommunication',
      },
      'A Recruitment Management System (RMS) is a set of tools designed to automate and manage your organization\'s recruiting and staffing operations. From posting your openings to keeping applicants connected and engaged throughout, Our RMS lets you manage your entire recruiting process.': {
        vi: 'Hệ thống quản lý tuyển dụng (RMS) là một bộ công cụ được thiết kế để tự động hóa và quản lý các hoạt động tuyển dụng và nhân sự của tổ chức bạn. Từ việc đăng các cơ hội của bạn đến việc giữ cho các ứng viên được kết nối và tham gia xuyên suốt, RMS của chúng tôi cho phép bạn quản lý toàn bộ quy trình tuyển dụng của mình.',
        en: 'A Recruitment Management System (RMS) is a set of tools designed to automate and manage your organization\'s recruiting and staffing operations. From posting your openings to keeping applicants connected and engaged throughout, Our RMS lets you manage your entire recruiting process.',
      },
      'Human Resources': {
        vi: 'Nguồn nhân lực',
        en: 'Human Resources',
      },
      'Young Kids is an application used to manage the Young Kids Ecopark community football center, helping the football center to manage and interact with parents quickly and effectively. Also this solution can apply for Guys, FITNESS, Yoga....and English centers.': {
        vi: 'Young Kids là ứng dụng dùng để quản lý trung tâm bóng đá cộng đồng Young Kids Ecopark, giúp trung tâm bóng đá quản lý và tương tác với phụ huynh một cách nhanh chóng và hiệu quả. Ngoài ra giải pháp này có thể áp dụng cho các trung tâm Anh ngữ Guys, FITNESS, Yoga....',
        en: 'Young Kids is an application used to manage the Young Kids Ecopark community football center, helping the football center to manage and interact with parents quickly and effectively. Also this solution can apply for Guys, FITNESS, Yoga....and English centers.',
      },
      'Applications': {
        vi: 'Ứng dụng',
        en: 'Applications',
      },
      'Partner with us and be part of our success-story!': {
        vi: 'Hợp tác phát triển games',
        en: 'Partner with us and be part of our success-story!',
      },
      'Submit your games': {
        vi: 'Gửi trò chơi của bạn',
        en: 'Submit your games',
      },
      'Funny Maths is a simple but effective brain game. Increase your mental speed by protecting math bubbles! 4 different game modes including "only times table mode" for students to practice. Multiple leaderboards and achievements to review your progress. Answer as many questions as you can before your math bubble pops!': {
        vi: 'Funny Maths là một trò chơi trí não đơn giản nhưng hiệu quả. Tăng tốc độ tinh thần của bạn bằng cách bảo vệ bong bóng toán học! 4 chế độ chơi khác nhau bao gồm "chế độ bảng chỉ thời gian" để học sinh thực hành. Nhiều bảng xếp hạng và thành tích để đánh giá tiến trình của bạn. Trả lời càng nhiều câu hỏi càng tốt trước khi bong bóng toán học của bạn bật lên!',
        en: 'Funny Maths is a simple but effective brain game. Increase your mental speed by protecting math bubbles! 4 different game modes including "only times table mode" for students to practice. Multiple leaderboards and achievements to review your progress. Answer as many questions as you can before your math bubble pops!',
      },
      'Mobile Games': {
        vi: 'Trò chơi di động',
        en: 'Mobile Games',
      },
      'Education': {
        vi: 'Giáo dục',
        en: 'Education',
      },
      'Brick Colors HD 2016 - a classical game in which your aim will be to don\'t let the block building to go up you can break it with a suitable block placing Classic Block puzzle game is this the king of all puzzle game because it\'s history is very old. It’ll take you back to the childhood , Brick Colors HD 2016 is a full of fun, attractive and suitable to everybody.': {
        vi: 'Brick Colors HD 2016 - một trò chơi cổ điển, trong đó mục tiêu của bạn là không để khối xây dựng lên, bạn có thể phá nó bằng một khối phù hợp, đặt trò chơi xếp hình Khối cổ điển là vua của tất cả các trò chơi giải đố vì nó là lịch sử rất già. Sẽ đưa bạn trở về tuổi thơ, Brick Colors HD 2016 đầy thú vị, hấp dẫn và phù hợp với tất cả mọi người.',
        en: 'Brick Colors HD 2016 - a classical game in which your aim will be to don\'t let the block building to go up you can break it with a suitable block placing Classic Block puzzle game is this the king of all puzzle game because it\'s history is very old. It’ll take you back to the childhood , Brick Colors HD 2016 is a full of fun, attractive and suitable to everybody.',
      },
      'Brick Classic Game - a classical game in which your aim will be to don\'t let the block building to go up you can break it with a suitable block placing Classic Block puzzle game is this the king of all puzzle game because it\'s history is very old.It’ll take you back to the childhood , Brick Classic Game is a full of fun, attractive and suitable to everybody.': {
        vi: 'Brick Classic Game - một trò chơi cổ điển, trong đó mục đích của bạn là không để khối xây dựng đi lên, bạn có thể phá nó bằng một khối phù hợp đặt trò chơi xếp hình Khối cổ điển là vua của tất cả các trò chơi giải đố vì nó có lịch sử rất Nó sẽ đưa bạn trở lại thời thơ ấu, Brick Classic Game là một trò chơi đầy thú vị, hấp dẫn và phù hợp với tất cả mọi người.',
        en: 'Brick Classic Game - a classical game in which your aim will be to don\'t let the block building to go up you can break it with a suitable block placing Classic Block puzzle game is this the king of all puzzle game because it\'s history is very old.It’ll take you back to the childhood , Brick Classic Game is a full of fun, attractive and suitable to everybody.',
      },
      'Find all matching pairs. Funny, challenging, this is Fantastic Animal - Best Classic game.\nFEATURES:\n-Classic game\n-Many stages and items to choose': {
        vi: 'Tìm tất cả các cặp phù hợp. Hài hước, đầy thử thách, đây là Fantastic Animal - Trò chơi cổ điển hay nhất. \nĐẶC TRƯNG: \n-Trò chơi cổ điển \n-Nhiều giai đoạn và mục để lựa chọn',
        en: 'Find all matching pairs. Funny, challenging, this is Fantastic Animal - Best Classic game.\nFEATURES:\n-Classic game\n-Many stages and items to choose',
      },
      'You are afraid to cross the street? Road Slaughter will help you spread the feeling to cross the crowded streets!\nHow to Play?\n1. Tap to jump so as not to be in the vehicle collision.\n2. Go as far as possible to get a high score!': {
        vi: 'Bạn sợ băng qua đường? Road Slaughter sẽ giúp bạn trải nghiệm cảm giác băng qua những con phố đông đúc! \nLàm thế nào để chơi? \n1. Bấm để nhảy để không bị va chạm với xe. \n2. Đi càng xa càng tốt để đạt điểm cao!',
        en: 'You are afraid to cross the street? Road Slaughter will help you spread the feeling to cross the crowded streets!\nHow to Play?\n1. Tap to jump so as not to be in the vehicle collision.\n2. Go as far as possible to get a high score!',
      },
      'Discover the latest news, product updates, and user research insights': {
        vi: 'Khám phá tin tức mới nhất, cập nhật sản phẩm và thông tin chi tiết về nghiên cứu người dùng',
        en: 'Discover the latest news, product updates, and user research insights',
      },
      'Previous': {
        vi: 'Trước',
        en: 'Previous',
      },
      'Next': {
        vi: 'Sau',
        en: 'Next',
      },
      'Expert articles on best software developments practives': {
        vi: 'Các bài viết của chuyên gia về các phương pháp phát triển phần mềm tốt nhất',
        en: 'Expert articles on best software developments practives',
      },
      'Get a bi-weekly email with most popular stories': {
        vi: 'Nhận email hai tuần một lần với những câu chuyện phổ biến nhất',
        en: 'Get a bi-weekly email with most popular stories',
      },
      'Sign Up': {
        vi: 'Đăng ký',
        en: 'Sign Up',
      },
      'All': {
        vi: 'Tất cả',
        en: 'All',
      },
      'Announcements': {
        vi: 'Thông báo',
        en: 'Announcements',
      },
      'Business': {
        vi: 'Kinh doanh',
        en: 'Business',
      },
      'Development': {
        vi: 'Phát triển',
        en: 'Development',
      },
      'Startup': {
        vi: 'Khởi động',
        en: 'Startup',
      },
      'We are Acazia Software': {
        vi: 'Chúng tôi là Acazia Software',
        en: 'We are Acazia Software',
      },
      'Acazia Software is a software development company that designs, develops, and maintains solutions that can make an impact through the best technologies.': {
        vi: 'Acazia Software là một công ty phát triển phần mềm thiết kế, phát triển và duy trì các giải pháp có thể tạo ra tác động thông qua các công nghệ tốt nhất.',
        en: 'Acazia Software is a software development company that designs, develops, and maintains solutions that can make an impact through the best technologies.',
      },
      'Founded': {
        vi: 'Năm thành lập',
        en: 'Founded',
      },
      'Teammates': {
        vi: 'Thành viên',
        en: 'Teammates',
      },
      'Projects handle': {
        vi: 'Tổng dự án',
        en: 'Projects handle',
      },
      'Development centers': {
        vi: 'Trụ sở',
        en: 'Development centers',
      },
      'Behind every good app we make is a great team': {
        vi: 'Đằng sau mỗi ứng dụng tốt chúng tôi làm là một đội ngũ tuyệt vời',
        en: 'Behind every good app we make is a great team',
      },
      'Our values': {
        vi: 'Giá trị cốt lỗi',
        en: 'Our values',
      },
      "Our Values ​​Our core value has always been one of win-win development. We enhance our clients' business thro ugh leveraging the most relevant technologies and through providing solutions that drive results and valuable experiences.": {
        vi: 'Giá trị cốt lõi của chúng tôi luôn luôn xoay quanh đảm bảo đôi bên cùng có lợi cùng phát triển. Chúng tôi gia tăng giá trị của doanh nghiệp đối tác qua việc áp dụng công nghệ tiến tiến phù hợp nhất và qua các giải pháp hiệu quả và tích luỹ.',
        en: "Our Values ​​Our core value has always been one of win-win development. We enhance our clients' business thro ugh leveraging the most relevant technologies and through providing solutions that drive results and valuable experiences.",
      },
      'Responsibility': {
        vi: 'Trách nhiệm',
        en: 'Responsibility',
      },
      'Driven by the passion, our software developers deliver enormous volumes of code yet ensuring these outputs are of the highest quality and on schedule.': {
        vi: 'Được thúc đẩy bởi niềm đam mê, các nhà phát triển phần mềm của chúng tôi cung cấp khối lượng lớn mã nhưng vẫn đảm bảo các kết quả đầu ra này có chất lượng cao nhất và đúng tiến độ.',
        en: 'Driven by the passion, our software developers deliver enormous volumes of code yet ensuring these outputs are of the highest quality and on schedule.',
      },
      'Reasonable Pricing': {
        vi: 'Giá cả hợp lý',
        en: 'Reasonable Pricing',
      },
      'We neither overestimate nor underestimate our capabilities and experience. Our customers always get quality-proven and battle-tested software development services valued for the money they invested.': {
        vi: 'Chúng tôi không đánh giá quá cao cũng như không đánh giá thấp năng lực và kinh nghiệm của mình. Khách hàng của chúng tôi luôn nhận được các dịch vụ phát triển phần mềm đã được kiểm chứng và thử nghiệm về chất lượng, có giá trị tương xứng với số tiền họ đã đầu tư.',
        en: 'We neither overestimate nor underestimate our capabilities and experience. Our customers always get quality-proven and battle-tested software development services valued for the money they invested.',
      },
      'Confident': {
        vi: 'Chất lượng',
        en: 'Confident',
      },
      'We use not only cutting-edge technologies but also ones most suitable to ensure the quality of the bestin-class solutions for our customers.': {
        vi: 'Chúng tôi không chỉ sử dụng các công nghệ tiên tiến mà còn sử dụng các công nghệ phù hợp nhất để đảm bảo chất lượng các giải pháp cho khách hàng của mình.',
        en: 'We use not only cutting-edge technologies but also ones most suitable to ensure the quality of the bestin-class solutions for our customers.',
      },
      'No Bureaucracy': {
        vi: 'Không quan liêu',
        en: 'No Bureaucracy',
      },
      'Our compact and well-balanced team applies best efforts to eradicate bureaucracy on the ground so that we can concentrate all of our attention on efficient and productive customer-oriented solutions.': {
        vi: 'Đội ngũ gọn nhẹ và cân đối của chúng tôi áp dụng những nỗ lực cao nhất để xóa bỏ tình trạng quan liêu trên cơ sở để chúng tôi có thể tập trung toàn bộ sự chú ý vào các giải pháp hướng tới khách hàng hiệu quả và năng suất.',
        en: 'Our compact and well-balanced team applies best efforts to eradicate bureaucracy on the ground so that we can concentrate all of our attention on efficient and productive customer-oriented solutions.',
      },
      'Pricing Model': {
        vi: 'Mô Hình Định Giá',
        en: 'Pricing Model',
      },
      'How can we help you?': {
        vi: 'Chúng Tôi Có Thể Giúp Bạn Được Gì?',
        en: 'How can we help you?',
      },
      'Dedicated Resources': {
        vi: 'Tài nguyên dành riêng',
        en: 'Dedicated Resources',
      },
      'Extension of your own team, it gives maximum control but requires more involvement into project management from the customer’s part.': {
        vi: 'Mở rộng nhóm của riêng bạn, nó cho phép kiểm soát tối đa nhưng đòi hỏi sự tham gia nhiều hơn vào quản lý dự án từ phía khách hàng.',
        en: 'Extension of your own team, it gives maximum control but requires more involvement into project management from the customer’s part.',
      },
      'Project Based': {
        vi: 'Dựa trên dự án',
        en: 'Project Based',
      },
      'Enormous flexibility and control over your budget, enabling ease of management and changes made during the development process.': {
        vi: 'Tính linh hoạt và kiểm soát rất lớn đối với ngân sách của bạn, cho phép dễ dàng quản lý và thực hiện các thay đổi trong quá trình phát triển.',
        en: 'Enormous flexibility and control over your budget, enabling ease of management and changes made during the development process.',
      },
      'You’ll enjoy working with Us': {
        vi: 'Bạn sẽ hài lòng khi làm việc với Chúng Tôi',
        en: 'You’ll enjoy working with Us',
      },
      'Our services': {
        vi: 'Dịch vụ của chúng tôi',
        en: 'Our services',
      },
      'We build software that are scalable and reliable ': {
        vi: 'Chúng tôi xây dựng phần mềm có khả năng mở rộng và đáng tin cậy',
        en: 'We build software that are scalable and reliable ',
      },
      'Mobile <br> Development': {
        vi: 'Phát triển ứng dụng Mobile',
        en: 'Mobile <br> Development',
      },
      'We’ll help you design, develop, and publish an iOS or Android software with the best user experience. It can be a component-based native app, a hybrid, or a PWA that will keep your customers coming back.': {
        vi: 'Chúng tôi sẽ giúp bạn thiết kế, lập trình và xuất bản phần mềm trên hai nền tảng iOS và Android với trải nghiệm người dùng tốt nhất. Công nghệ chúng tôi sử dụng: Swift/Objective C; Kotlin; Flutter; React Native',
        en: 'We’ll help you design, develop, and publish an iOS or Android software with the best user experience. It can be a component-based native app, a hybrid, or a PWA that will keep your customers coming back.',
      },
      'See our case studies': {
        vi: 'Xem các dự án',
        en: 'See our case studies',
      },
      'Web <br> Development': {
        vi: 'Phát triển ứng dụng Web',
        en: 'Web <br> Development',
      },
      'We build solutions from scratch as design, coding, refactor, migrate, architect, and provide ongoing maintenance with scalable technologies that stand the test of time. ': {
        vi: 'Chúng tôi xây dựng các giải pháp từ đầu như thiết kế, lập trình, tinh chỉnh lại mã nguồn, chuyển đổi sang nền tảng mới, và cung cấp bảo trì liên tục với các công nghệ có thể mở rộng, chịu được thử thách của thời gian.',
        en: 'We build solutions from scratch as design, coding, refactor, migrate, architect, and provide ongoing maintenance with scalable technologies that stand the test of time. ',
      },
      'Quality Assurance <br> &amp; Testing': {
        vi: 'Đảm bảo chất lượng & Thử nghiệm',
        en: 'Quality Assurance <br> &amp; Testing',
      },
      'Work with our ISTQB certified QA engineers. They’re trained to catch bugs before each deployment, possibly saving you thousands in production fixes. In the last 7 years, our tests have secured successful product launches, buyouts, and cloud migrations.': {
        vi: 'Làm việc với các chuyên gia kiểm thử có chứng chỉ ISTQB của chúng tôi. Họ được đào tạo để bắt lỗi trước mỗi lần triển khai, có thể giúp bạn tiết kiệm hàng nghìn bản sửa lỗi trong quá trình phát triển. Trong 7 năm qua, các thử nghiệm của chúng tôi đã đảm bảo việc ra mắt sản phẩm tới thị trường thành công.',
        en: 'Work with our ISTQB certified QA engineers. They’re trained to catch bugs before each deployment, possibly saving you thousands in production fixes. In the last 7 years, our tests have secured successful product launches, buyouts, and cloud migrations.',
      },
      'I.T. Outsourcing <br> and Consulting': {
        vi: 'Dịch vụ tư vấn và gia công I.T.',
        en: 'I.T. Outsourcing <br> and Consulting',
      },
      'We provide a full IT service to your business in case you want to increase development team in Vietnam. It\'s recruitment, accounting, product development and operating.': {
        vi: 'Chúng tôi cung cấp dịch vụ CNTT đầy đủ cho doanh nghiệp của bạn trong trường hợp bạn muốn tăng cường đội ngũ phát triển tại Việt Nam trong xu hướng toàn cầu hoá. Quá trình triển khai dịch vụ bao gồm: tuyển dụng, kế toán, phát triển sản phẩm và vận hành.',
        en: 'We provide a full IT service to your business in case you want to increase development team in Vietnam. It\'s recruitment, accounting, product development and operating.',
      },
      'Visit Us': {
        vi: 'Trụ Sở',
        en: 'Visit Us',
      },
      'Expertise': {
        vi: 'Chuyên môn',
        en: 'Expertise',
      },
      '6th Floor- 55/67 Ngoc Lam, Long Bien, Ha Noi': {
        vi: 'Tầng 6, toà nhà Hồng Hà, Số 57, ngõ 66 Phố Ngọc Lâm, Quận Long Biên, Tp Hà Nội',
        en: '6th Floor- 55/67 Ngoc Lam, Long Bien, Ha Noi',
      },
      'Discover the latest news, technology articles and innovative solutions': {
        vi: 'Khám phá các tin tức mới nhất, các bài báo công nghệ và các giải pháp sáng tạo',
        en: 'Discover the latest news, technology articles and innovative solutions',
      },
      '': {
        vi: '',
        en: '',
      },
      '': {
        vi: '',
        en: '',
      },
      '': {
        vi: '',
        en: '',
      },
      '': {
        vi: '',
        en: '',
      },
    }
    const translator = $('body').translate({
      lang: this.checkLanguage(),
      t: dict
    });

    const switchLanguageWrapper = document.querySelectorAll('.language-switch')
    switchLanguageWrapper.forEach((item) => {
      const langOption = item.querySelectorAll('.lang-option')
      langOption.forEach((langOption) => langOption.addEventListener('click', () => {
        insertParam('lang', langOption.dataset.lang)
      }))
    })
  },
}

const messenger = {
  init: function () {
    this.setup()
  },
  setup: function () {
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "569734633180130");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v11.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}