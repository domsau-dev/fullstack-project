import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-list-of-products',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './list-of-products.component.html',
  styleUrl: './list-of-products.component.scss'
})
export class ListOfProductsComponent implements OnInit {
  products$!: Observable<string[]>;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
  }
}
