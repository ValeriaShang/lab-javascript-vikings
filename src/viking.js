// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? this.name + " has received " + damage + " points of damage"
      : this.name + " has died in act of combat";
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? "A Saxon has received " + damage + " points of damage"
      : "A Saxon has died in combat";
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let index = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[index].receiveDamage(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength
    );

    if (this.saxonArmy[index].health <= 0) this.saxonArmy.splice(index, 1);
    return saxon;
  }

  saxonAttack() {
    let index = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[index].receiveDamage(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
    );

    if (this.vikingArmy[index].health <= 0) this.vikingArmy.splice(index, 1);
    return viking;
  }

  SoldierAttack(attacker, defender) {
    let index = Math.floor(Math.random() * defender.length);
    let soldier = defender[index].receiveDamage(
      attacker[Math.floor(Math.random() * attacker.length)].strength
    );

    if (defender[index].health <= 0) defender.splice(index, 1);
    return soldier;
  }

  showStatus() {
    if (!this.saxonArmy.length)
      return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length)
      return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
