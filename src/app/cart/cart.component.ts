import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class ShippingComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
  }
 
}
