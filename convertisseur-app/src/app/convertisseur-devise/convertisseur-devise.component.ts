import { Component, OnInit } from '@angular/core';
import { conversionHistory } from './conversionHistory'

@Component({
  selector: 'app-convertisseur-devise',
  templateUrl: './convertisseur-devise.component.html',
  styleUrls: ['./convertisseur-devise.component.css']
})
export class ConvertisseurDeviseComponent implements OnInit {

  montant: number = 0;
  tauxChange: number = 1.1;
  montantConverti: number = 0;
  devise: string = 'EUR';
  autreDevise: string = "USD";
  conversionHistory: conversionHistory[] = [];

  manualTaux: number = 0;
  tauxChangeFixe: number = 0; 
  tauxChangeFixeActive: boolean = false; 


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
    //  this.tauxChange += variation;
    //Désactiver le taux de change fixe (si actif) lors d'une variation de plus de 2% avec le taux réel.
    if (!this.tauxChangeFixeActive || Math.abs(variation - this.tauxChangeFixe) > 0.02) {
      this.tauxChange += variation;
    } else {
      this.tauxChange = this.tauxChangeFixe;
    }

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
    /** Ajouter un tableau d’historique des 5 dernières demandes de conversion calculées */
    const historyEntry: conversionHistory = {
      tauxReel: this.tauxChange,
      tauxSaisi: this.tauxChangeFixe,
      montantInitial: this.montant,
      montantCalcule: this.montantConverti,
      deviseInitiale: this.devise,
      deviseCalculee: this.autreDevise,
    };

    this.conversionHistory.push(historyEntry);
    if (this.conversionHistory.length > 5) {
      this.conversionHistory.shift();
    }

  }
  /** */
}
