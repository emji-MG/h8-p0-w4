function attack (damage) {
    // Code disini
    var damage = damage - 2;
    return damage;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var totalDamage = numberOfAttacks * attack(damagePerAttack)
  
    return totalDamage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90