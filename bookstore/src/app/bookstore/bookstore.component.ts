import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
import { BookList } from '../modeli/bookList';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookStoreComponent implements OnInit {

  constructor(private service:BookServiceService, private modalService: NgbModal) { }

  books:BookList;
  cart = [];

  parameters:any = {
    bestseller:false,
    discount:false
  }

  ngOnInit(): void {
    this.update();
  }

  update(){
    this.service.GetAllBooks(this.parameters).subscribe(
      x => {this.books = x}
    )
  };

  AddToCart(item){
    this.cart.push(item);
    window.alert("Product added to cart");
    this.update();
  };

  OpenModal(){
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.cart = this.cart;
    modalRef.result.then((result) => {if (result) this.cart = []});
  }

}
