import { Component, OnInit } from '@angular/core';
import { ContextMenuService, MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  isLogged: boolean = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.verificarSession();
    this.menuItems();
  }

  menuItems() {
    this.items = [
      {
        label: 'Empresas',
        icon: 'pi pi-fw pi-briefcase',
        url: 'empresa'
      },
      {
        label: 'Entidades',
        icon: 'pi pi-fw pi-user',
        url: 'entidad'
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-id-card',
        url: 'usuario'
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.cerrarSession()
      }
    ];
  }

  verificarSession() {
    if (this.authService.userLogged()) {
      this.isLogged = true;
    }
  }

  cerrarSession(){
    this.authService.logout();
  }

}
