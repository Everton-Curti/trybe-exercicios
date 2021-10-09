const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };

  const danoWarrior = () => {
      let danoMaximoWarrior = warrior.strength* warrior.weaponDmg;
      let danoMinimoWarrior = warrior.strength;
      let danoDoWarrior = Math.ceil(Math.random() * (danoMaximoWarrior - danoMinimoWarrior)) + danoMinimoWarrior;
      return danoDoWarrior;
  }
  console.log(danoWarrior());
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const danoDragao = () => {
    let danoMaximo = dragon.strength;
    let danoMinimo = 15;
    let danoDoDragao = Math.ceil(Math.random() * (danoMaximo - danoMinimo)) + danoMinimo;
    return danoDoDragao;
  }

  
  



  