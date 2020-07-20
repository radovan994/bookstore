import { Order } from './../modeli/order';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bs-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() public cart;
  orderForm: FormGroup

  constructor(private fb: FormBuilder, private service: BookServiceService, public activeModal: NgbActiveModal) {
    this.createForm();
   }

   createForm(){
    this.orderForm = this.fb.group({
      address:['', Validators.required],
      appartment:['', Validators.required],
      telephone:['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.cart);
    this.updateTotal();
  };

  updateTotal(){
    const sum = this.cart
    .map(item => item.price)
    .reduce((prev, curr) => prev + curr, 0);
    document.getElementById("sum").innerHTML = sum.toFixed(2) + "$";
  }

  onSubmit(){ 
    let submittedOrder: Order = this.orderForm.value;
    this.service.SubmitOrder(submittedOrder).subscribe(
      x => {
        alert("Order submitted ");
        this.orderForm.reset();
  });
  this.activeModal.close(this.cart);
  }

  DeleteItem(item){
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.updateTotal();
    if(this.cart.length == 0){
      this.activeModal.close(this.cart);
    }
  }

}
