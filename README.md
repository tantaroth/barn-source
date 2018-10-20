# Barn

Es una librería básica creada para **angular 2+**, inspirada en **redux** para el manejo de datos.

## Instalar
```
npm install ng-barn
```

### Ejemplo de uso básico
*app.module.ts*
```
import { BrowserModule } from  '@angular/platform-browser';  
import { NgModule } from  '@angular/core';  
import { NgBarnModule } from  'ng-barn';  
  
import { AppComponent } from  './app.component';  
  
@NgModule({  
	declarations: [  
		AppComponent  
	],
	imports: [  
		BrowserModule,  
		NgBarnModule.forRoot({  
			store: {  
				users: []  
			}  
		})  
	],  
	providers: [],  
	bootstrap: [AppComponent]  
})  
export  class AppModule { }
```
*app.component.ts*
```
import { Component } from  '@angular/core';  
import { NgBarnService } from  'ng-barn';  
  
@Component({  
	selector: 'app-root',  
	template: `  
		<pre>{{ list | json }}</pre>  
	`  
})  
export  class AppComponent {  
	list: any[];  
	constructor(  
		private store: NgBarnService  
	) {  
		store.select('users');  
		store.set([  
			{  
				id: 1,  
				name: 'Eduar'  
			}  
		]);  
		store.push({  
			id: 2,  
			name: 'Andres'  
		});  
		store.update(0, {  
			name: 'Eduard'  
		});  
		store.delete(1);  
		  
		console.log(store.get());  
		  
		this.list = store.get();  
	}  
}
```
### Métodos
- **select:** Crea un instancia del store creado, si no está creado deberá hacerlo con el método **set**.
- **get:** Obtiene el valor de un store.
- **set:** Define el valor de un store.
- **push:** Agrega un valor a un store.
- **update:** Actualiza el valor definido con el índice del store.
- **delete:** Elimina el valor de un store.
## Insertando formulario
*app.module.ts*
```
import { BrowserModule } from  '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from  '@angular/core';  
import { NgBarnModule } from  'ng-barn';  
  
import { AppComponent } from  './app.component';  
  
@NgModule({  
	declarations: [  
		AppComponent  
	],
	imports: [  
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgBarnModule.forRoot({  
			store: {  
				users: []  
			}  
		})  
	],  
	providers: [],  
	bootstrap: [AppComponent]  
})  
export  class AppModule { }
```
*app.component.ts*
```
import { Component, OnInit } from  '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBarnService } from  'ng-barn';  

@Component({  
	selector: 'app-root',
	template: './index.html'
})  
export  class AppComponent implements OnInit { 
	index: number;  
	form: FormGroup;  
	list: any[];  
	listed: boolean;  
	editing: boolean;
	constructor(  
		private store: NgBarnService  
	) {  
		store.select('users');  
		store.set([  
			{  
				id: 1,  
				name: 'Eduar'  
			}  
		]);  
		store.push({  
			id: 2,  
			name: 'Andres'  
		});  
		store.update(0, {  
			name: 'Eduard'  
		});  
		store.delete(1);  
		  
		console.log(store.get());  
		  
		this.list = store.get();  
	}

	ngOnInit() {  
		this.form = new FormGroup({  
			name: new FormControl('', Validators.required),  
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
		if (confirm('Está seguro de eliminar este registro?')) {  
			this.store.delete(index);  
			this.reset();  
		}  
	}

	onSubmitting(event: any[]) {  
		this.list = event;  
	}  
	onSubmitted(event: boolean) {  
		if (event) {  
			this.reset();  
		}  
	}

}
```
*index.html*
```
<h4 [hidden]="!editing">Editing...</h4>  
  
<tnt-barn-form [index]="index" [formGroup]="form" [guardSave]="true" (submitting)="onSubmitting($event)" (submitted)="onSubmitted($event)">  
	<div class="form-group">  
		<label for="name">Name</label>  
		<input type="text" class="form-control" id="name" name="name" formControlName="name" #name>  
		<div *ngIf="form.controls.name.invalid && form.controls.name.touched">  
			Name is invalid  
		</div>  
	</div>  
	  
	<button type="submit">Save</button>  
	<button type="reset" (click)="reset()">New</button>  
</tnt-barn-form>  
  
<ul *ngIf="list">  
<li *ngFor="let item of list; let i = index">  
  
<pre>{{ item | json }}</pre>
  
<button type="button" (click)="edit(i)">Edit</button>  
<button type="button" (click)="delete(i)">Delete</button>  
  
</li>  
</ul>
```
### Propiedades de *tnt-barn-form*

-   **index:** Es el índice que se usará para que el formulario actue, una vez se asigne un índice se editará los cambios suministrados en el formulario o se guardará cuando no tenga asignado ningún valor en el índice.
-   **formGroup:** Es la estructura del formulario que se usará junto a las validaciones con la funcionalidad de angular 2+ (FormGroup).
- **guardSave:** Permite que el usuario obtenga una advertencia cuando el  formulario no se haya guardado correctamente y quiera salir de la ventana.

### Métodos de *tnt-barn-form*

-   **submitting:** Devuelve el arreglo completo con los objetos guardados o editando una vez haga submit en el formulario.
- **submitted:** Devuelve el estado del submit en un tipo de dato *(boolean)*, ***true*** si se guardo correctamente, ***false*** si hubo un impedimento al guardar los datos.
