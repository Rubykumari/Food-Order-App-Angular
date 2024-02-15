import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchItem:string='';

  constructor(
    private aRoute : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit():void{
    this.aRoute.params.subscribe(params=>{
      if(params["paramsItem"])
      this.searchItem = params['paramsItem'];
    })
  }

  search():void{
    this.router.navigateByUrl('/search/'+ this.searchItem)
  }
}
