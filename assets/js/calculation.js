
var point={
	pts:0,
 
 health:0,
 dayofFood:0,
 dayofFuel:0,
 dayofWater:0,
 
days_lived:0,
 
};
var spcl=0;
var foodini=0;
var fuelini=0;
var waterini=0;
var o=0;
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<? php 
include'connect.php'>
function calculate(resources){
	for(var i=0;i<resources.length;i++)
if(resources[i].id=="oxygen")
 o=i;
	if(o){
					for(var i=0;i<resources.length;i++){

				if(resources[i].id == "water")
				total_water++;
			    if(resources[i].id == "fuel")
				total_fuel++;
			    if(resources[i].id == "food")
				total_food++;
                if(resources[i].id == "torch")
				torch=1;
			    if(resources[i].id == "first_aid")
				first_aid=1;
                
                
				}

                 if(total_water == ?? ) spcl++;
                  if(total_duel == ?? ) spcl++;
                  if(total_food == ?? ) spcl++;
                  if(torch) spcl++;

						for(var i=1; ;i++,days_lived++)
						{ 
						if(total_water >0 && total_food > 0  && total_fuel > 0)    
						   { 
						   	total_water-=0.25;
						    total_fuel-= 0.20;
						    total_food-=0.1;
	
						   }
						else if(total_water > 0 && total_food > 0 && total_fuel <=0)    
						   {
						   	total_water-=0.25;
						   point.health-=10;
						    total_food-=0.1;
						   } 
						else if(total_water > 0 && total_food <= 0 && total_fuel > 0)    
						   {
						   	total_water-=0.25;
						   point.health-=20;
						   } 
						else if(total_water > 0 && total_food <= 0 && total_fuel <= 0)    
						   {
						   	total_water-=0.25;
						   point.health-=20;
						   } 
						else if(total_water <=0 && total_food > 0 && total_fuel > 0)    
						   {
						   total_food-=25;

						   point.health-=10;
						   } 
						else if(total_water <= 0 && total_food > 0 && total_fuel <=0)    
						   { total_food-=25;
						   point.health-=10;
						   } 
						else if(total_water <=0 && total_food <= 0 && total_fuel > 0)    
						   {
						   	point.health-=30;
						   } 
						else if(total_water <=0 && total_food <= 0 && total_fuel <= 0)    
						   {
						   	point.health -=30;
						   } 
                        if(foodini == 0)
                         if(total_food==0) {foodini= 1; point.dayofFood= i;  }
						if(fuelini == 0)
                         if(total_fuel==0) {fuelini= 1; point.dayofFuel= i;  }
						if(waterini == 0)
                         if(total_water==0) {foodini= 1; point.dayofWater= i;  }
						

						if(point.health == 0 && first_aid)
							point.health+=20;

						
                       switch(spcl)
                    {

                       case 1:days_lived+=2;
                       case 2:days_lived+=5;
                       case 3:days_lived+=8;
                       case 4:days_lived+=10;
                   }

						}// for ends

}//if oxygen

    $.ajax({
    type:'post',
    url:dump.php,
    data: point,
    success:function(data){
    //code to run after success
    }

    })

return point;
}