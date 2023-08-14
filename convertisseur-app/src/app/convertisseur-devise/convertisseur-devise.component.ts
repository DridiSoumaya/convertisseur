import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-convertisseur-devise',
  templateUrl: './convertisseur-devise.component.html',
  styleUrls: ['./convertisseur-devise.component.css']
})
export class ConvertisseurDeviseComponent implements OnInit{

  montant: number = 0;
  tauxChange: number = 1.1;
  montantConverti: number = 0;
  devise: string = 'EUR';
  autreDevise: string = "USD";
  manualTaux: number = 0;
  



  ngOnInit(): void {
    this.initTauxChange();
    setInterval(() => {
      this.updateTauxChange();
    }, 3000);
  }

  /* initialiser taux de change EUR / USD a 1.1 */
  initTauxChange(): void {
    this.tauxChange = 1.1;
  }
  /*update taux de change a random value between -0.05 and +0.05 s */
  updateTauxChange(): void {
    const variation = Math.random() * 0.1 - 0.05;
    this.tauxChange += variation;
 
  }
  /*convertir le montant selon le choix de devise */
  convertirDevise(): void {
    // this.montantConverti = this.montant * this.tauxChange;
    if (this.devise === 'EUR') {
      this.montantConverti = this.montant * this.tauxChange;
      this.autreDevise = 'USD';
    } else if (this.devise === 'USD') {
      this.montantConverti = this.montant / this.tauxChange;
      this.autreDevise = 'EUR';
    }
  
  }
  /** */
}
