import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  scroll: ElementRef | undefined
  calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    let progressValue = document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100)/ calcHeight)

    if(pos > 100){
      scrollProgress!.style.display = "grid"
    }else {
      scrollProgress!.style.display = "none"
    }
    scrollProgress?.addEventListener("click", () => {
      document.documentElement.scrollTop = 0
    })

    scrollProgress!.style.background = `conic-gradient( #03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}% );`

    //doesnt work
  }
  constructor() { }

  ngOnInit(): void {
  }

  scrollUp(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

    salad(){ window.scrollTo({
      top: 100,
      behavior: 'smooth'
    })}
    stews(){ window.scrollTo({
      top: 800,
      behavior: 'smooth'
    })}
    appetizers(){ window.scrollTo({
      top: 1300,
      behavior: 'smooth'
    })}
    barbeque(){ window.scrollTo({
      top: 2450,
      behavior: 'smooth'
    })}
    drinks(){ window.scrollTo({
      top: 3500,
      behavior: 'smooth'
    })}
    beer(){ window.scrollTo({
      top: 4000,
      behavior: 'smooth'
    })}
    warmdrinks(){ window.scrollTo({
      top: 4250,
      behavior: 'smooth'
    })}
    wine(){ window.scrollTo({
      top: 4850,
      behavior: 'smooth'
    })}
    saladM(){ window.scrollTo({
      top: 200,
      behavior: 'smooth'
    })}
    stewsM(){ window.scrollTo({
      top: 800,
      behavior: 'smooth'
    })}
    appetizersM(){ window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    })}
    barbequeM(){ window.scrollTo({
      top: 2050,
      behavior: 'smooth'
    })}
    drinksM(){ window.scrollTo({
      top: 3000,
      behavior: 'smooth'
    })}
    beerM(){ window.scrollTo({
      top: 3600,
      behavior: 'smooth'
    })}
    warmdrinksM(){ window.scrollTo({
      top: 4050,
      behavior: 'smooth'
    })}
    wineM(){ window.scrollTo({
      top: 12250,
      behavior: 'smooth'
    })}


}
