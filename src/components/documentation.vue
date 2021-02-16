<template>
  <div>
    <div id="docu">
      <h2>Commands </h2><br>
      <p><i>!Help</i>: Permet de voir les différentes commandes.<br></p>
      <p><i>!Ticket</i>: Permet d'envoyer un ticket au membre du staff en cas de problème.</p><br>
      <h3>Economny </h3><br>
      <p><i>!Accessory</i>: Permet de voir la liste des accessoires disponible à la vente.<br></p>
      <p><i>!Armor</i>: Permet de voir la liste des armures disponible à la vente.<br></p>
      <p><i>!Weapon</i>: Permet de voir la liste des armes et bouclier à la vente.<br></p>
      <p><i>!Consomable</i>: Permet de voir la liste des consommables<br></p>
      <p><i>!Sell</i>: Permet de vendre un objet dans son inventaire via le nom de l'item.<br></p>
      <p><i>!Shop</i>: Permet d'acheter un objet via son <b>label</b>(nombre) avec demande d'achat. (Achat annulé au bout de 5s sans réponse)<br></p>
      <p><i>!Userbalance</i>: Permet de voir le porte-monnaie du joueur ping ou de voir son propre porte-monnaie.</p><br>
      <h3>Misc </h3><br>
      <p><i>!Botinfo</i>: Donne des informations sur le Bot.<br></p>
      <p><i>!Daily</i>: Donne une paie à l'utilisateur. (CD = 24h temps reel)<br></p>
      <p><i>!Roue</i>: Permet de tourner une roue pour gagner une certaine somme d'argent. (CD = 6h temps reel)<br></p>
      <p><i>!Ping</i>: Permet de voir le ping du Bot et de l'API.<br></p>
      <h3>RPG </h3><br>
      <p><i>!Battle</i>: Permet de lancer un combat avec le nom du monstre que vous voulez combattre.<br></p>
      <p><i>!Battleduo</i>: Permet de lancer un combat avec son teammate ( il faut le ping )<br></p>
      <p><i>!Teams</i>: Permet de créer, dissoudre ou voir son groupe !<br></p>
      <p><i>!Equip</i>: Permet de s'équiper d'un objet avec le nom de celui-ci dans son inventaire.<br></p>
      <p><i>!Uequip</i>: Permet de retirer un objet avec son nom quand il est équipé.<br></p>
      <p><i>!Heal</i>: Heal le joueur selon son niveau. <b>(commande payante en po)</b><br></p>
      <p><i>!Monsterlist</i>: Affiche la liste des monstres disponible à combattre. (Attention à la difficulté des monstres)<br></p>
      <p><i>!Prestige</i>: Reset les niveaux en gardant les stats.<br><br>
      (Prérequis : lvl 1000, coût: élevé ! Prestige max: 10, Les monstres deviennent plus fort si votre prestige monte)<br></p>
      <p><i>!Profil</i>: Affiche le profil du joueur.<br></p>
      <p><i>!Ressusrection</i>: Permet de retourner à la vie si on meurt au combat. <b>(Commande payante en po)</b><br></p>
      <p><i>!Setup</i>: Permet de créer son personnage.<br></p>
      <p><i>!Use</i>: Permet des objets de type : <b>Potion</b> et <b>Scroll</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documentation'
}
</script>
<style scoped>
@font-face {
  font-family: "Baby_School";
  src: url(../assets/font/BabySchoolItalic.ttf);
}
#docu {
  margin-top: 15px;
  border: 2px solid rgb(48, 176, 255);
  padding: 10px;
  border-radius: 30px;
  text-align: left;
  font-size: 18px;
  width: 1000px;
  margin-left: 23.5%;
  font-family: Arial, serif;
}
h3,h2{
  font-family: Baby_School, serif;
  padding-top: 5px;
  font-size: 23px;
  text-align: center;
  color: deepskyblue;
}
i{
  color: red;
  font-size: 21px;
}
p{
  padding: 4px 0;
}
</style>