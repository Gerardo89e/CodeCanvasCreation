// navbar-sticky.ts

export class StickyNavbar {
    private navbar!: HTMLElement | null;
    private sticky!: number;
  
    constructor(private navbarSelector: string) {}
  
    private handleScroll(): void {
      const scrollPosition: number = window.scrollY || window.pageYOffset;
  
      if (scrollPosition >= this.sticky) {
        this.navbar?.classList.add('sticky');
      } else {
        this.navbar?.classList.remove('sticky');
      }
    }
  
    private init(): void {
      // Initialize the sticky navbar inside ngOnInit
      this.navbar = document.querySelector(this.navbarSelector);
      this.sticky = this.navbar ? this.navbar.offsetTop : 0;
  
      // Attach the 'handleScroll' function to the scroll event
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  
    public initializeStickyNavbar(): void {
      // Ensure initialization is done inside Angular's lifecycle
      if (document.readyState === 'complete') {
        this.init();
      } else {
        window.addEventListener('load', () => this.init());
      }
    }
  }
  