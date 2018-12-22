import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StoreService } from "../../projects/ng-barn/src/public_api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "barn-source";
  index: number;
  form: FormGroup;
  list: any[];
  listed: boolean;
  editing: boolean;

  constructor(private store: StoreService) {
    store.select("users");
    store.set([
      {
        id: 1,
        name: "Eduard"
      },
      {
        id: 3,
        name: "Eduard"
      },
      {
        id: 4,
        name: "Eduard"
      },
      {
        id: 5,
        name: "Eduard"
      }
    ]);
    store.push({
      id: 2,
      name: "Andros"
    });
    store.push({
      id: 6,
      name: "Andros"
    });
    store.push({
      id: 7,
      name: "Andros"
    });
    store.push({
      id: 8,
      name: "Andros"
    });
    store.update(1, {
      name: "Andres"
    });
    store.delete(1);

    console.log(store.get());
    this.list = store.get();
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required)
    });

    this.list = this.store.get();
  }

  reset() {
    this.form.reset();
    this.index = null;
    this.editing = null;
  }

  edit(index: number) {
    this.editing = true;
    this.index = index;

    this.form.patchValue(this.list[index]);
  }

  delete(index: number) {
    if (confirm("Está seguro de eliminar este registro?")) {
      this.store.delete(index);
      this.reset();
    }
  }

  onSubmitting(event: object) {
    console.log(event);
    // this.list = event;
  }
  onSubmitted(event: boolean) {
    if (event) {
      this.reset();
    }
  }
}
