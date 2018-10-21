import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataC {

   getItem (id){
   return this.items[id];
  }

   getItems (){
    return this.items.slice(0);
  }


  items = [
    {
      'id': 0,
      'title': 'Explorer 1',
      'desc': 'Explorer 1 marked the United States’ first step into the dawn of the Space Age. ' +
        'Just three months prior in November, 1957, the Soviet Union had launched humanity’s second ' +
        'satellite into orbit. By this point, the United States was under immense pressures to compete' +
        ' with the Soviet achievement, which only mounted when the U.S. Navy\'s Vanguard rocket exploded ' +
        'on the launch pad with the United States\' first attempt to launch a satellite. Explorer 1 had ' +
        'been in the works at the Jet Propulsion Laboratory and was quickly readied for launch. On ' +
        'January 31, 1958 it made orbit and became not only the first U.S. satellite, but also the first' +
        ' science satellite. Its first discovery was of the Van Allen radiation belts, a collection of ' +
        'charged particles trapped in the Earth’s magnetic field. Trapped there, the charged particles ' +
        'don\'t harm Earth or life on it, but they can pose a threat to orbiting satellites and astronauts.' +
        ' Understanding the dynamics of this region is essential for protecting technological assets and ' +
        'planning crewed space missions. This discovery opened the doors of space exploration, the first' +
        ' of many in the last 60 years about our planet, our solar system and the cosmos.',
      'img': 'assets/img2.png'
    },

    {



      'id': 1,
      'title': 'Solar Eclipse',
      'desc': 'Solar eclipse is a celestial event in which the moon passes between the Sun and Earth and' +
        ' blocks all or part of the Sun for up to about three hours. Most of that time you see a partial' +
        ' eclipse, where the moon covers only a part of the Sun. To see a total eclipse, where the moon' +
        ' fully covers the Sun for a short few minutes, you must be in the path of totality. The path of' +
        ' totality is a relatively thin ribbon, around 50 miles wide. Solar eclipses are fairly numerous,' +
        ' about 2 to 4 per year. In any given location on Earth, a total eclipse happens only once every ' +
        'hundred years or so, though for selected locations they can occur as little as a few years apart' +
        '. Looking directly at the Sun without appropriate protection, except during totality, could ' +
        'severely hurt your eyes. However, there are many ways to safely view an eclipse of the Sun.' +
        ' They require some type of filtering device, like special eclipse glasses.',
      'img': 'assets/img0.png'



    },


    {



      'id': 2,
      'title': 'World on Fire',
      'desc': 'On Earth, something is always burning. Wildfires are started by lightning or accidentally' +
        ' by people, and people use controlled fires to manage farmland and pasture and clear natural ' +
        'vegetation for farmland. Fires can generate large amounts of smoke pollution, release greenhouse' +
        ' gases, and unintentionally degrade ecosystems. But fires can also clear away dead and dying' +
        ' underbrush, which can help restore an ecosystem to good health. In many ecosystems, including' +
        ' boreal forests and grasslands, plants have co-evolved with fire and require periodic burning ' +
        'to reproduce.',
      'img': 'assets/img1.png'



    },


    {



      'id': 3,
      'title': 'The World\'s Highest Mountains',
      'desc': 'Fourteen mountain peaks stand taller than 8000 meters (26247 feet). There could have' +
        ' been many more of these “eight-thousanders” if, in 1793, the French commission that ' +
        'established the length of the meter had made it just a bit shorter. Yet the decision to make a' +
        ' meter equivalent to one ten-millionth of the distance between the equator and the North Pole' +
        ' left the world with only this handful. All of them are found in either the Karakoram or ' +
        'Himalayan mountain ranges of central Asia. Ground photography of the towering peaks is ' +
        'ubiquitous, but images captured by NASA’s EO-1 satellite offer a less familiar perspective. ' +
        'The sensor on EO-1 looked directly down on the mountains, providing a view of the very tip of' +
        ' each summit. Glaciers have chiseled Everest’s summit into a huge, triangular pyramid defined' +
        ' by three major faces and ridges. K2’s modern nickname is “Savage Mountain” because of the' +
        ' extreme risks it poses to climbers—frequent avalanches and harsh weather. Kangchenjunga, ' +
        'the third highest peak in the world, is the most easterly of the eight-thousanders. Despite' +
        ' being the fourth highest mountain in the world, Lhotse is often overshadowed by its neighbor,' +
        ' Mount Everest. Makalu’s classic pyramid shape is the product of bowl-shaped cirque glaciers ' +
        'grinding away at the summit on all sides.',
      'img': 'assets/img3.png'



    },



    {



      'id': 4,
      'title': 'Martian Clues on a Baby Island',
      'desc': '"In late December 2014, a submarine volcano in the South Pacific Kingdom of Tonga erupted,' +
        ' sending a violent stream of steam, ash and rock into the air. The ash plumes rose as high as 30,000 ' +
        'feet into the sky. When the ash finally settled in January 2015, a newborn island with a 400-foot summit' +
        ' nestled between two older islands – visible to satellites in space. The newly formed Tongan island,' +
        ' unofficially known as Hunga Tonga-Hunga Ha\'apai after its neighbors, was initially projected to last a ' +
        'few months, washed away by the ocean. But to the surprise of NASA\'s science team tracking the evolution of' +
        ' the island using monthly, high-resolution satellites observations from the French space agency\'s Pléades-1A' +
        ' and DigitalGlobe\'s Worldview satellites, as well as the Canadian Space Agency\'s RadarSat-2 observations, ' +
        'the island has survived for more than three years. The Tongan island has a round shape in the first clear' +
        ' satellite image after it formed. It shows a remarkable resemblance to volcanic formations on Mars. This' +
        ' digital elevation map of a Mars volcano has similarities to the Tongan island that suggest similar processes' +
        ' may have shaped it. Understanding the processes that shape the Tongan island could provide insights into ' +
        'these Martian features which may have formed in in a similarly wet environment – locations ripe for looking' +
        ' for signs of past life.',
      'img': 'assets/img4.png'



    },







    {



      'id': 5,
      'title': 'Earth Is Getting Greener',
      'desc': 'Scientists have found that a quarter to half of Earth’s vegetated lands has shown significant ' +
        'greening over the last 35 years largely due to rising levels of atmospheric carbon dioxide. The findings' +
        ' are based on computer models and data collected by NASA and NOAA satellites. The greening represents an' +
        ' increase in leaves on plants and trees equivalent in area to two times the continental United States.' +
        ' Green leaves use sunlight, water and carbon dioxide to grow. While rising carbon dioxide concentrations' +
        ' in the air can be beneficial for plants, it is also the chief culprit of climate change. The gas, which ' +
        'traps heat in Earth’s atmosphere, has been increasing since the industrial age and is continuing to reach ' +
        'concentrations not seen in at least 500,000 years. What\'s more, researchers say the favorable impacts of ' +
        'carbon dioxide on plants may be limited. Studies have shown that plants adjust to increasing concentrations ' +
        'of carbon dioxide and the powerful boost given to vegetation growth decreases over time.',
      'img': 'assets/img5.png'



    },



    {



      'id': 6,
      'title': 'Dropped into a Hurricane',
      'desc': 'The swirling vortex of hurricane clouds are a familiar sight in satellite imagery, but in order to' +
        ' better understand these storms, scientists need to look inside them. In 2014, NASA\'s remotely piloted' +
        ' Global Hawk aircraft overflew Hurricane Edouard in the Atlantic Ocean to understand what makes hurricanes ' +
        'intensify into fiercer storms. During the 24-hour flight, a sounder instrument measured the relative humidity' +
        ' of the storm from above, where the cloud cover was thin. Where clouds were too thick, including around the' +
        ' eye of the hurricane, the Global Hawk released dropsondes, foot-long sensors that dropped from the aircraft' +
        ' down through the storm to the ocean\'s surface – sending humidity, temperature and wind speed data back' +
        ' the whole way down. Warm moist air gives hurricanes their strength, and near the eye, the red colors show ' +
        'high humidity powering the storm. Scientists use these and other data collected from these flights to better ' +
        'understand the environmental signals inside and outside of the hurricane that lead to rapid intensification ' +
        'where wind speeds dramatically increase in a 24-hour period – vital information for anyone in the storm\'s path.',
      'img': 'assets/img6.png'



    },


    {



      'id': 7,
      'title': 'Antarctica\'s Giant Iceberg',
      'desc': 'An iceberg about the size of the state of Delaware split off from Antarctica’s Larsen C ice shelf' +
        ' sometime between July 10 and July 12. Larsen C, a floating platform of glacial ice on the east side of ' +
        'the Antarctic Peninsula, is the fourth largest ice shelf ringing Earth’s southernmost continent. In 2014,' +
        ' a crack that had been slowly growing into the ice shelf for decades suddenly started to spread northwards.' +
        ' Now that the close to 2,240 square-mile (5,800 square kilometers) chunk of ice has broken away, the Larsen ' +
        'C shelf area has shrunk by approximately 12 percent. The calving of the massive new iceberg was captured by ' +
        'the Moderate Resolution Imaging Spectroradiometer on NASA’s Aqua satellite, and confirmed by the Visible ' +
        'Infrared Imaging Radiometer Suite instrument on the joint NASA/NOAA Suomi National Polar-orbiting Partnership ' +
        '(Suomi-NPP) satellite. Thermal satellite images that detect temperature differences between the frozen ice ' +
        'and warmer sea water allowed scientists to see the crack in the Antarctic winter darkness.',
      'img': 'assets/img7.png'



    },


    {



      'id': 8,
      'title': 'The New Arctic',
      'desc': 'Arctic sea ice has seen a continued decline in recent decades, and scientists say the downward trend ' +
        'isn\'t likely to change. In fact, low levels of sea ice coverage have become the new normal. ' +
        'The floating cap of sea ice that blankets the Arctic Ocean and surrounding seas grows in the winter' +
        ' and shrinks in the summer. Since 1978, scientists have monitored changes to the annual maximum and' +
        ' minimum extent of the sea ice cover using satellites. Measurements show the minimum yearly Arctic sea' +
        ' ice extent is declining at a rate of 13.4 percent per decade. This year’s melt season started with a bang, ' +
        'with a record low maximum extent in March and relatively rapid ice loss through May that slowed down in ' +
        'June. Although this year’s decline will probably not end in a new, all-time low (the minimum extent is' +
        ' typically reached in September), scientists expect the area of the Arctic covered by sea ice will rank ' +
        'among the lowest on record.',
      'img': 'assets/img8.png'


    }




  ]
}
