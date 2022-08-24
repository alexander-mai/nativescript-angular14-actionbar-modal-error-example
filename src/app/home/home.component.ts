import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { ModalRootComponent } from "./modal-root.component";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onTap(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: true
    };

    this._modalService.showModal(ModalRootComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }
}
