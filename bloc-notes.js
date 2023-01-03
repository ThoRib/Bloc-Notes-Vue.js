var vm = new Vue({
    el : "#root",
    data : {
        allListe : [
            {
            titre: "Votre titre",
            texte: "Votre texte",
            }
        ],
        noteActif : 0
    },
    methods : {
        afficheNote(i) {
            this.noteActif = i;
        },
        saveTitle(i, event) {
            if (event.key) {
                this.allListe[i].titre = event.target.value;
            };
        },
        ecritTexte(i) {
            this.allListe[i].wTexte = true;
        },
        saveTexte(i, event) {
            if (event.key) {
                this.allListe[i].texte = event.target.value;
            };
        },
        ajoute() {
            this.allListe.push({titre:"Votre titre", texte:"Votre texte"});
        },
    },
    template: 
        `<div>
            <div class="nav"><button v-on:click="ajoute()">Ajouter une page</button></div>
            <div class="bloc">
                <ul class="titles">
                    <li v-for="(oneListe, i) in allListe"
                        v-on:click.stop="afficheNote(i)" >
                        <input type="text" v-bind:value="oneListe.titre" 
                        v-on:keyup="saveTitle(i, $event)"/>
                    </li>
                </ul>
                <div class="note">
                    <textarea
                        v-bind:value="allListe[noteActif].texte" 
                        v-on:keyup="saveTexte(noteActif, $event)"
                    />
                </div>
            </div>
        </div>`
});