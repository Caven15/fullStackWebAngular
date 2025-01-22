import { PrefixNot } from '@angular/compiler';
import { Component } from '@angular/core';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-exo-binding',
  standalone: false,

  templateUrl: './exo-binding.component.html',
  styleUrl: './exo-binding.component.scss'
})
export class ExoBindingComponent {
    // Développez un composant Angular permettant d'afficher un produit avec les informations suivantes : nom, prix et disponibilité, en utilisant Property Binding.
    // Ajoutez un bouton permettant d'augmenter dynamiquement le prix du produit grâce à Event Binding.
    // Implémentez également un bouton d'achat, qui devient désactivé lorsque le produit est acheté, en utilisant Attribute Binding.
    produit : Produit = {
        nom : "Ordinateur portable",
        prix : 1500,
        disponible : true
    }

    modifierPrix(){
        this.produit.prix += 100;
    }

    acheter(){
        alert("Achat effectué !!!");
        this.produit.disponible = false;
    }
}
