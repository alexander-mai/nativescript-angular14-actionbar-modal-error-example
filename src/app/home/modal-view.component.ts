import { Component, OnInit } from "@angular/core";
import { RouterExtensions, ModalDialogParams } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  templateUrl: "./modal-view.component.html",
  styleUrls: ["./modal-view.component.css"]
})
export class ModalViewActionBarComponent implements OnInit {
  constructor(
    private _params: ModalDialogParams,
    private _page: Page,
    private router: RouterExtensions,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onClose(): void {
    this._params.closeCallback("return value");
  }
}
