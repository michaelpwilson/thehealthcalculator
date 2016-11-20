import { Component } from '@angular/core';

@Component({
    selector: 'burned-calories',
    template: `
<div class="layout">
  <div class="layout__left calculator-container">
    <nav>
      <h1>The Health Calculator</h1>
    </nav>
    <div class="form-container">
    <h3>Answer these six easy questions</h3>
     
    <p>Everyone has a different metabolic rate and this extremely accurate calculator tells you how many calories YOU are burning off in all types of exercise! </p>
    
    <form>
      <h4>Step 1: Enter Your Gender</h4>
      
      <label>Gender</label>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      
      <h4>Step 2: Enter Your Weight</h4>
      
      <label>Weight</label>
      <select>
        <option>Kilograms</option>
        <option>Pounds</option>
        <option>Stones</option>
      </select>
      
      <input placeholder="300" type="number">
      
      <h4>Step 3: Enter Your Height</h4>

      <label>Height</label>
      <select>
        <option>Inches</option>
        <option>Centimeters:</option>
      </select>
      
      <input placeholder="300" type="number">
      
      <h4>Step 4: Enter Your Age</h4>
      
      <label>Age</label>
      <input type="number">
<div class="long-selects">
      <h4>Step 5: Select One Activity</h4>
      <label>At The Gym:</label>
      
<select name="activity">
<option value="choose one activity   [ScoobMETs=1]">choose one activity</option>
<option value="resistance training, vigorous - weight lifting, power lifting or body building   [ScoobMETs=6]">resistance training, vigorous – weight lifting, power lifting or body building</option>
<option value="resistance training, squats , slow or explosive effort   [ScoobMETs=5]">resistance training, squats , slow or explosive effort</option>
<option value="resistance training, multiple exercises, 8-15 repetitions at varied resistance   [ScoobMETs=3.5]">resistance training, multiple exercises, 8-15 repetitions at varied resistance</option>
<option value="circuit training, moderate effort   [ScoobMETs=4.3]">circuit training, moderate effort</option>
<option value="circuit training, including kettlebells with minimal rest and vigorous intensity   [ScoobMETs=8]">circuit training, including kettlebells with minimal rest and vigorous intensity</option>
<option value="Curves exercise routines in women   [ScoobMETs=3.5]">Curves exercise routines in women</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="health club exercise classes   [ScoobMETs=5]">health club exercise classes</option>
<option value="health club exercise, conditioning classes   [ScoobMETs=7.8]">health club exercise, conditioning classes</option>
<option value="aerobic, step, with 6 - 8 inch step   [ScoobMETs=7.5]">aerobic, step, with 6 – 8 inch step</option>
<option value="aerobic, step, with 10 - 12 inch step   [ScoobMETs=9.5]">aerobic, step, with 10 – 12 inch step</option>
<option value="aerobic, step, with 4-inch step   [ScoobMETs=5.5]">aerobic, step, with 4-inch step</option>
<option value="bench step class, general   [ScoobMETs=8.5]">bench step class, general</option>
<option value="aerobic, low impact   [ScoobMETs=5]">aerobic, low impact</option>
<option value="aerobic, high impact   [ScoobMETs=7.3]">aerobic, high impact</option>
<option value="aerobic dance wearing 10-15 lb weights   [ScoobMETs=10]">aerobic dance wearing 10-15 lb weights</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="walking, 2.5 mph, level, firm surface   [ScoobMETs=3]">walking, 2.5 mph, level, firm surface</option>
<option value="walking, 2.5 mph, downhill   [ScoobMETs=3.3]">walking, 2.5 mph, downhill</option>
<option value="walking, 2.8 to 3.2 mph, level, moderate pace, firm surface   [ScoobMETs=3.5]">walking, 2.8 to 3.2 mph, level, moderate pace, firm surface</option>
<option value="walking, 3.5 mph, level, brisk, firm surface, walking for exercise   [ScoobMETs=4.3]">walking, 3.5 mph, level, brisk, firm surface, walking for exercise</option>
<option value="walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade   [ScoobMETs=5.3]">walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade</option>
<option value="walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade   [ScoobMETs=8]">walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade</option>
<option value="walking, 4.0 mph, level, firm surface, very brisk pace   [ScoobMETs=5]">walking, 4.0 mph, level, firm surface, very brisk pace</option>
<option value="walking, 4.5 mph, level, firm surface, very, very brisk   [ScoobMETs=7]">walking, 4.5 mph, level, firm surface, very, very brisk</option>
<option value="walking, 5.0 mph, level, firm surface   [ScoobMETs=8.3]">walking, 5.0 mph, level, firm surface</option>
<option value="walking, 5.0 mph, uphill, 3% grade   [ScoobMETs=9.8]">walking, 5.0 mph, uphill, 3% grade</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="Running, 4 mph (13 min/mile)   [ScoobMETs=6]">Running, 4 mph (13 min/mile)</option>
<option value="running, 5 mph (12 min/mile)   [ScoobMETs=8.3]">running, 5 mph (12 min/mile)</option>
<option value="running, 5.2 mph (11.5 min/mile)   [ScoobMETs=9]">running, 5.2 mph (11.5 min/mile)</option>
<option value="running, 6 mph (10 min/mile)   [ScoobMETs=9.8]">running, 6 mph (10 min/mile)</option>
<option value="running, 6.7 mph (9 min/mile)   [ScoobMETs=10.5]">running, 6.7 mph (9 min/mile)</option>
<option value="running, 7 mph (8.5 min/mile)   [ScoobMETs=11]">running, 7 mph (8.5 min/mile)</option>
<option value="running, 7.5 mph (8 min/mile)   [ScoobMETs=11.5]">running, 7.5 mph (8 min/mile)</option>
<option value="running, 8 mph (7.5 min/mile)   [ScoobMETs=11.8]">running, 8 mph (7.5 min/mile)</option>
<option value="running, 8.6 mph (7 min/mile)   [ScoobMETs=12.3]">running, 8.6 mph (7 min/mile)</option>
<option value="running, 9 mph (6.5 min/mile)   [ScoobMETs=12.8]">running, 9 mph (6.5 min/mile)</option>
<option value="running, 10 mph (6 min/mile)   [ScoobMETs=14.5]">running, 10 mph (6 min/mile)</option>
<option value="running, 11 mph (5.5 min/mile)   [ScoobMETs=16]">running, 11 mph (5.5 min/mile)</option>
<option value="running, 12 mph (5 min/mile)   [ScoobMETs=19]">running, 12 mph (5 min/mile)</option>
<option value="running, 13 mph (4.6 min/mile)   [ScoobMETs=19.8]">running, 13 mph (4.6 min/mile)</option>
<option value="running, 14 mph (4.3 min/mile)   [ScoobMETs=23]">running, 14 mph (4.3 min/mile)</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="rowing, stationary ergometer, general, vigorous effort   [ScoobMETs=6]">rowing, stationary ergometer, general, vigorous effort</option>
<option value="rowing, stationary, general, moderate effort   [ScoobMETs=4.8]">rowing, stationary, general, moderate effort</option>
<option value="rowing, stationary, 100 watts, moderate effort   [ScoobMETs=7]">rowing, stationary, 100 watts, moderate effort</option>
<option value="rowing, stationary, 150 watts, vigorous effort   [ScoobMETs=8.5]">rowing, stationary, 150 watts, vigorous effort</option>
<option value="rowing, stationary, 200 watts, very vigorous effort   [ScoobMETs=12]">rowing, stationary, 200 watts, very vigorous effort</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="bicycling, stationary, general   [ScoobMETs=7]">bicycling, stationary, general</option>
<option value="bicycling, stationary, 30-50 watts, very light to light effort   [ScoobMETs=3.5]">bicycling, stationary, 30-50 watts, very light to light effort</option>
<option value="bicycling, stationary, 90-100 watts, moderate to vigorous effort   [ScoobMETs=6.8]">bicycling, stationary, 90-100 watts, moderate to vigorous effort</option>
<option value="bicycling, stationary, 101-160 watts, vigorous effort   [ScoobMETs=8.8]">bicycling, stationary, 101-160 watts, vigorous effort</option>
<option value="bicycling, stationary, 161-200 watts, vigorous effort   [ScoobMETs=11]">bicycling, stationary, 161-200 watts, vigorous effort</option>
<option value="bicycling, stationary, 201-270 watts, very vigorous effort   [ScoobMETs=14]">bicycling, stationary, 201-270 watts, very vigorous effort</option>
<option value="bicycling, stationary, 51-89 watts, light-to-moderate effort   [ScoobMETs=4.8]">bicycling, stationary, 51-89 watts, light-to-moderate effort</option>
<option value="bicycling, stationary, RPM/Spin bike class   [ScoobMETs=8.5]">bicycling, stationary, RPM/Spin bike class</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="Elliptical trainer, moderate effort   [ScoobMETs=5]">Elliptical trainer, moderate effort</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="swimming laps, freestyle, fast, vigorous effort   [ScoobMETs=9.8]">swimming laps, freestyle, fast, vigorous effort</option>
<option value="swimming laps, freestyle, front crawl, slow, light or moderate effort   [ScoobMETs=5.8]">swimming laps, freestyle, front crawl, slow, light or moderate effort</option>
<option value="swimming, backstroke, general, training or competition   [ScoobMETs=9.5]">swimming, backstroke, general, training or competition</option>
<option value="swimming, backstroke, recreational   [ScoobMETs=4.8]">swimming, backstroke, recreational</option>
<option value="swimming, breaststroke, general, training or competition   [ScoobMETs=10.3]">swimming, breaststroke, general, training or competition</option>
<option value="swimming, breaststroke, recreational   [ScoobMETs=5.3]">swimming, breaststroke, recreational</option>
<option value="swimming, butterfly, general   [ScoobMETs=13.8]">swimming, butterfly, general</option>
<option value="swimming, crawl, fast speed, ~75 yards/minute, vigorous effort   [ScoobMETs=10]">swimming, crawl, fast speed, ~75 yards/minute, vigorous effort</option>
<option value="swimming, crawl, medium speed, ~50 yards/minute, vigorous effort   [ScoobMETs=8.3]">swimming, crawl, medium speed, ~50 yards/minute, vigorous effort</option>
<option value="swimming, leisurely, not lap swimming, general   [ScoobMETs=6]">swimming, leisurely, not lap swimming, general</option>
<option value="swimming, sidestroke, general   [ScoobMETs=7]">swimming, sidestroke, general</option>
<option value="swimming, treading water, fast, vigorous effort   [ScoobMETs=9.8]">swimming, treading water, fast, vigorous effort</option>
<option value="swimming, treading water, moderate effort, general   [ScoobMETs=3.5]">swimming, treading water, moderate effort, general</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="rope jumping, fast pace, 120-160 skips/min   [ScoobMETs=12.3]">rope jumping, fast pace, 120-160 skips/min</option>
<option value="rope jumping, moderate pace, 100-120 skips/min, 2 foot skip, plain bounce   [ScoobMETs=11.8]">rope jumping, moderate pace, 100-120 skips/min, 2 foot skip, plain bounce</option>
<option value="rope jumping under 100 skips/min, 2 foot skip, rhythm bounce   [ScoobMETs=8.8]">rope jumping under 100 skips/min, 2 foot skip, rhythm bounce</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort   [ScoobMETs=8]">calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort</option>
<option value="calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort   [ScoobMETs=3.8]">calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort</option>
<option value="calisthenics (e.g., situps, abdominal crunches), light effort   [ScoobMETs=2.8]">calisthenics (e.g., situps, abdominal crunches), light effort</option>
<option value="calisthenics, light or moderate effort   [ScoobMETs=3.5]">calisthenics, light or moderate effort</option>
<option value="home exercise, general   [ScoobMETs=3.8]">home exercise, general</option>
<option value="stair-treadmill ergometer, general   [ScoobMETs=9]">stair-treadmill ergometer, general</option>
<option value="rope skipping, general   [ScoobMETs=12.3]">rope skipping, general</option>
<option value="ski machine, general   [ScoobMETs=6.8]">ski machine, general</option>
<option value="slide board exercise, general   [ScoobMETs=11]">slide board exercise, general</option>
<option value="slimnastics, jazzercise   [ScoobMETs=6]">slimnastics, jazzercise</option>
<option value="stretching, mild   [ScoobMETs=2.3]">stretching, mild</option>
<option value="pilates, general   [ScoobMETs=3]">pilates, general</option>
<option value="teaching exercise class (e.g., aerobic, water)   [ScoobMETs=6.8]">teaching exercise class (e.g., aerobic, water)</option>
<option value="therapeutic exercise ball, Fitball exercise   [ScoobMETs=2.8]">therapeutic exercise ball, Fitball exercise</option>
<option value="upper body exercise, arm ergometer   [ScoobMETs=2.8]">upper body exercise, arm ergometer</option>
<option value="upper body exercise, Airdyne (arms only) 40 rpm, moderate   [ScoobMETs=4.3]">upper body exercise, Airdyne (arms only) 40 rpm, moderate</option>
<option value="water aerobics, water calisthenics, water exercise   [ScoobMETs=5.3]">water aerobics, water calisthenics, water exercise</option>
<option value="whirlpool, sitting   [ScoobMETs=1.3]">whirlpool, sitting</option>
<option value="video exercise workouts, (e.g., yoga, stretching), light effort   [ScoobMETs=2.3]">video exercise workouts, (e.g., yoga, stretching), light effort</option>
<option value="video exercise workouts, moderate effort   [ScoobMETs=4]">video exercise workouts, moderate effort</option>
<option value="video exercise workouts, cardio-resistance, vigorous effort   [ScoobMETs=6]">video exercise workouts, cardio-resistance, vigorous effort</option>
<option value="yoga, Hatha   [ScoobMETs=2.5]">yoga, Hatha</option>
<option value="yoga, Power   [ScoobMETs=4]">yoga, Power</option>
<option value="yoga, Nadisodhana   [ScoobMETs=2]">yoga, Nadisodhana</option>
<option value="yoga, Surya Namaskar   [ScoobMETs=3.3]">yoga, Surya Namaskar</option>
<option value="Haka Powhiri, Moteatea, Waita Tira, Whakawatea, moderate effort   [ScoobMETs=5.3]">Haka Powhiri, Moteatea, Waita Tira, Whakawatea, moderate effort</option>
<option value="Haka, Taiahab, vigorous effort   [ScoobMETs=6.8]">Haka, Taiahab, vigorous effort</option>
<option value="basketball, game ( 490)   [ScoobMETs=8]">basketball, game ( 490)</option>
<option value="basketball, non-game, general ( 480)   [ScoobMETs=6]">basketball, non-game, general ( 480)</option>
<option value="basketball, general   [ScoobMETs=6.5]">basketball, general</option>
<option value="basketball, shooting baskets   [ScoobMETs=4.5]">basketball, shooting baskets</option>
<option value="basketball, drills, practice   [ScoobMETs=9.3]">basketball, drills, practice</option>
<option value="boxing, in ring, general   [ScoobMETs=12.8]">boxing, in ring, general</option>
<option value="boxing, punching bag   [ScoobMETs=5.5]">boxing, punching bag</option>
<option value="boxing, sparring   [ScoobMETs=7.8]">boxing, sparring</option>
<option value="handball, general ( 520)   [ScoobMETs=12]">handball, general ( 520)</option>
<option value="handball, team   [ScoobMETs=8]">handball, team</option>
<option value="martial arts, slower pace, novice performers, practice   [ScoobMETs=5.3]">martial arts, slower pace, novice performers, practice</option>
<option value="martial arts, moderate pace (judo, jujitsu, karate, kick boxing, tae kwan do)   [ScoobMETs=10.3]">martial arts, moderate pace (judo, jujitsu, karate, kick boxing, tae kwan do)</option>
<option value="tai chi, qi gong, general   [ScoobMETs=3]">tai chi, qi gong, general</option>
<option value="tai chi, qi gong, sitting, light effort   [ScoobMETs=1.5]">tai chi, qi gong, sitting, light effort</option>
<option value="volleyball, competitive, in gymnasium   [ScoobMETs=6]">volleyball, competitive, in gymnasium</option>
<option value="volleyball, non-competitive, 6 - 9 member team, general   [ScoobMETs=3]">volleyball, non-competitive, 6 – 9 member team, general</option>
</select>
      
      <label>At Work</label>
      
 <select name="activityWork">
<option value="choose one activity   [ScoobMETs=1]">choose one activity</option>
<option value="active workstation, treadmill desk, walking   [ScoobMETs=2.3]">active workstation, treadmill desk, walking</option>
<option value="airline flight attendant   [ScoobMETs=3]">airline flight attendant</option>
<option value="bakery, general, moderate effort   [ScoobMETs=4]">bakery, general, moderate effort</option>
<option value="bakery, light effort   [ScoobMETs=2]">bakery, light effort</option>
<option value="bookbinding   [ScoobMETs=2.3]">bookbinding</option>
<option value="building road, driving heavy machinery   [ScoobMETs=6]">building road, driving heavy machinery</option>
<option value="building road, directing traffic, standing   [ScoobMETs=2]">building road, directing traffic, standing</option>
<option value="carpentry, general, light effort   [ScoobMETs=2.5]">carpentry, general, light effort</option>
<option value="carpentry, general, moderate effort   [ScoobMETs=4.3]">carpentry, general, moderate effort</option>
<option value="carpentry, general, heavy or vigorous effort   [ScoobMETs=7]">carpentry, general, heavy or vigorous effort</option>
<option value="carrying heavy loads (e.g., bricks, tools)   [ScoobMETs=8]">carrying heavy loads (e.g., bricks, tools)</option>
<option value="carrying moderate loads up stairs, moving boxes 25-49 lbs   [ScoobMETs=8]">carrying moderate loads up stairs, moving boxes 25-49 lbs</option>
<option value="chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart   [ScoobMETs=4]">chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart</option>
<option value="coal mining, drilling coal, rock   [ScoobMETs=5.3]">coal mining, drilling coal, rock</option>
<option value="coal mining, erecting supports   [ScoobMETs=5]">coal mining, erecting supports</option>
<option value="coal mining, general   [ScoobMETs=5.5]">coal mining, general</option>
<option value="coal mining, shoveling coal   [ScoobMETs=6.3]">coal mining, shoveling coal</option>
<option value="cook, chef   [ScoobMETs=2.5]">cook, chef</option>
<option value="construction, outside, remodeling, new structures   [ScoobMETs=4]">construction, outside, remodeling, new structures</option>
<option value="custodial work, light effort    [ScoobMETs=2.3]">custodial work, light effort </option>
<option value="custodial work, moderate effort    [ScoobMETs=3.8]">custodial work, moderate effort </option>
<option value="electrical work (e.g., hook up wire, tapping-splicing)   [ScoobMETs=3.3]">electrical work (e.g., hook up wire, tapping-splicing)</option>
<option value="engineer (e.g., mechanical or electrical)   [ScoobMETs=1.8]">engineer (e.g., mechanical or electrical)</option>
<option value="farming, vigorous effort (e.g., baling hay, cleaning barn)   [ScoobMETs=7.8]">farming, vigorous effort (e.g., baling hay, cleaning barn)</option>
<option value="farming, feeding animals, chasing cattle by walking/horseback, harvesting crops   [ScoobMETs=4.8]">farming, feeding animals, chasing cattle by walking/horseback, harvesting crops</option>
<option value="farming, light effort (e.g., cleaning animal sheds, preparing animal feed)   [ScoobMETs=2]">farming, light effort (e.g., cleaning animal sheds, preparing animal feed)</option>
<option value="farming, driving tasks (e.g., driving tractor or harvester)   [ScoobMETs=2.8]">farming, driving tasks (e.g., driving tractor or harvester)</option>
<option value="farming, feeding small animals   [ScoobMETs=3.5]">farming, feeding small animals</option>
<option value="farming, feeding cattle, horses   [ScoobMETs=4.3]">farming, feeding cattle, horses</option>
<option value="farming, hauling water    [ScoobMETs=4.3]">farming, hauling water </option>
<option value="farming, taking care of animals (grooming, brushing, shearing sheep, branding)   [ScoobMETs=4.5]">farming, taking care of animals (grooming, brushing, shearing sheep, branding)</option>
<option value="farming, rice, planting, grain milling activities   [ScoobMETs=3.8]">farming, rice, planting, grain milling activities</option>
<option value="farming, milking by hand, cleaning pails, moderate effort   [ScoobMETs=3.5]">farming, milking by hand, cleaning pails, moderate effort</option>
<option value="farming, milking by machine, light effort   [ScoobMETs=1.3]">farming, milking by machine, light effort</option>
<option value="fire fighter, general   [ScoobMETs=8]">fire fighter, general</option>
<option value="fire fighter, rescue victim, automobile accident, using pike pole   [ScoobMETs=6.8]">fire fighter, rescue victim, automobile accident, using pike pole</option>
<option value="fire fighter, raising and climbing ladder with full gear, simulated fire supression   [ScoobMETs=8]">fire fighter, raising and climbing ladder with full gear, simulated fire supression</option>
<option value="fire fighter, hauling hoses, carrying equipment, breaking down walls   [ScoobMETs=9]">fire fighter, hauling hoses, carrying equipment, breaking down walls</option>
<option value="fishing, commercial, light effort   [ScoobMETs=3.5]">fishing, commercial, light effort</option>
<option value="fishing, commercial, moderate effort   [ScoobMETs=5]">fishing, commercial, moderate effort</option>
<option value="fishing, commercial, vigorous effort   [ScoobMETs=7]">fishing, commercial, vigorous effort</option>
<option value="forestry, ax chopping,1.25 kg axe, 51 blows/min   [ScoobMETs=17.5]">forestry, ax chopping,1.25 kg axe, 51 blows/min</option>
<option value="forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort   [ScoobMETs=5]">forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort</option>
<option value="forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort   [ScoobMETs=8]">forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort</option>
<option value="forestry, moderate effort (sawing wood with power saw, weeding, hoeing)   [ScoobMETs=4.5]">forestry, moderate effort (sawing wood with power saw, weeding, hoeing)</option>
<option value="forestry,  barking, felling, trimming, carrying or stacking logs, planting, sawing   [ScoobMETs=8]">forestry,  barking, felling, trimming, carrying or stacking logs, planting, sawing</option>
<option value="furriery   [ScoobMETs=4.5]">furriery</option>
<option value="garbage collector, walking, dumping bins into truck   [ScoobMETs=4]">garbage collector, walking, dumping bins into truck</option>
<option value="hairstylist (e.g., plaiting hair, manicure, make-up artist)   [ScoobMETs=1.8]">hairstylist (e.g., plaiting hair, manicure, make-up artist)</option>
<option value="horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping   [ScoobMETs=7.3]">horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping</option>
<option value="horse, feeding, watering, cleaning stalls, implied walking and lifting loads   [ScoobMETs=4.3]">horse, feeding, watering, cleaning stalls, implied walking and lifting loads</option>
<option value="horse racing, galloping   [ScoobMETs=7.3]">horse racing, galloping</option>
<option value="horse racing, trotting   [ScoobMETs=5.8]">horse racing, trotting</option>
<option value="horse racing, walking   [ScoobMETs=3.8]">horse racing, walking</option>
<option value="kitchen maid   [ScoobMETs=3]">kitchen maid</option>
<option value="lawn keeper, yard work, general   [ScoobMETs=4]">lawn keeper, yard work, general</option>
<option value="laundry worker   [ScoobMETs=3.3]">laundry worker</option>
<option value="locksmith   [ScoobMETs=3]">locksmith</option>
<option value="machine tooling, working sheet metal, machine fitter, operating lathe, welding   [ScoobMETs=3]">machine tooling, working sheet metal, machine fitter, operating lathe, welding</option>
<option value="Machine tooling, operating punch press, moderate effort   [ScoobMETs=5]">Machine tooling, operating punch press, moderate effort</option>
<option value="manager, property   [ScoobMETs=1.8]">manager, property</option>
<option value="manual or unskilled labor, general, light effort   [ScoobMETs=2.8]">manual or unskilled labor, general, light effort</option>
<option value="manual or unskilled labor, general, moderate effort   [ScoobMETs=4.5]">manual or unskilled labor, general, moderate effort</option>
<option value="manual or unskilled labor, general, vigorous effort   [ScoobMETs=6.5]">manual or unskilled labor, general, vigorous effort</option>
<option value="masonry, concrete, moderate effort   [ScoobMETs=4.3]">masonry, concrete, moderate effort</option>
<option value="masonry, concrete, light effort   [ScoobMETs=2.5]">masonry, concrete, light effort</option>
<option value="massage therapist, standing   [ScoobMETs=4]">massage therapist, standing</option>
<option value="moving, carrying or pushing heavy objects, 75 lbs or more,   [ScoobMETs=7.5]">moving, carrying or pushing heavy objects, 75 lbs or more,</option>
<option value="skindiving or SCUBA diving as a frogman, Navy Seal   [ScoobMETs=12]">skindiving or SCUBA diving as a frogman, Navy Seal</option>
<option value="operating heavy duty equipment, automated, not driving   [ScoobMETs=2.5]">operating heavy duty equipment, automated, not driving</option>
<option value="orange grove work, picking fruit   [ScoobMETs=4.5]">orange grove work, picking fruit</option>
<option value="painting,house, furniture, moderate effort   [ScoobMETs=3.3]">painting,house, furniture, moderate effort</option>
<option value="plumbing activities   [ScoobMETs=3]">plumbing activities</option>
<option value="printing, paper industry worker, standing   [ScoobMETs=2]">printing, paper industry worker, standing</option>
<option value="police, directing traffic, standing   [ScoobMETs=2.5]">police, directing traffic, standing</option>
<option value="police, driving a squad car, sitting   [ScoobMETs=2.5]">police, driving a squad car, sitting</option>
<option value="police, riding in a squad car, sitting   [ScoobMETs=1.3]">police, riding in a squad car, sitting</option>
<option value="police, making an arrest, standing   [ScoobMETs=4]">police, making an arrest, standing</option>
<option value="postal carrier, walking to deliver mail   [ScoobMETs=2.3]">postal carrier, walking to deliver mail</option>
<option value="shoe repair, general   [ScoobMETs=2]">shoe repair, general</option>
<option value="shoveling, digging ditches   [ScoobMETs=7.8]">shoveling, digging ditches</option>
<option value="shoveling, more than 16 lbs/minute, deep digging, vigorous effort   [ScoobMETs=8.8]">shoveling, more than 16 lbs/minute, deep digging, vigorous effort</option>
<option value="shoveling, less than 10 lbs/minute, moderate effort   [ScoobMETs=5]">shoveling, less than 10 lbs/minute, moderate effort</option>
<option value="shoveling, 10 to 15 lbs/minute, vigorous effort   [ScoobMETs=6.5]">shoveling, 10 to 15 lbs/minute, vigorous effort</option>
<option value="sitting tasks, light effort office work, chemistry lab work, computer work   [ScoobMETs=1.5]">sitting tasks, light effort office work, chemistry lab work, computer work</option>
<option value="sitting meetings   [ScoobMETs=1.5]">sitting meetings</option>
<option value="sitting tasks, moderate effort (e.g., pushing heavy levers)   [ScoobMETs=2.5]">sitting tasks, moderate effort (e.g., pushing heavy levers)</option>
<option value="sitting, teaching stretching or yoga, or light effort exercise class   [ScoobMETs=2.8]">sitting, teaching stretching or yoga, or light effort exercise class</option>
<option value="standing tasks, light effort (bartending, store clerk)   [ScoobMETs=3]">standing tasks, light effort (bartending, store clerk)</option>
<option value="standing assemble heavy parts, welding, stocking parts, nursing patient care   [ScoobMETs=3]">standing assemble heavy parts, welding, stocking parts, nursing patient care</option>
<option value="standing lifting items continuously, 10 to 20 lbs, with limited walking or resting   [ScoobMETs=4.5]">standing lifting items continuously, 10 to 20 lbs, with limited walking or resting</option>
<option value="standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes   [ScoobMETs=3.5]">standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes</option>
<option value="standing, lifting more than 50 lbs, masonry, painting, paper hanging   [ScoobMETs=4.5]">standing, lifting more than 50 lbs, masonry, painting, paper hanging</option>
<option value="steel mill, moderate effort (e.g., fettling, forging, tipping molds)   [ScoobMETs=5.3]">steel mill, moderate effort (e.g., fettling, forging, tipping molds)</option>
<option value="steel mill, hand rolling, merchant mill rolling, removing slag, tending furnace   [ScoobMETs=8.3]">steel mill, hand rolling, merchant mill rolling, removing slag, tending furnace</option>
<option value="tailoring, cutting fabric   [ScoobMETs=2.3]">tailoring, cutting fabric</option>
<option value="tailoring, general   [ScoobMETs=2.5]">tailoring, general</option>
<option value="tailoring, hand sewing   [ScoobMETs=1.8]">tailoring, hand sewing</option>
<option value="tailoring, machine sewing   [ScoobMETs=2.5]">tailoring, machine sewing</option>
<option value="tailoring, pressing   [ScoobMETs=3.5]">tailoring, pressing</option>
<option value="tailoring, weaving, finishing operations, washing, dyeing   [ScoobMETs=2]">tailoring, weaving, finishing operations, washing, dyeing</option>
<option value="tailoring, weaving, spinning and weaving operations   [ScoobMETs=4]">tailoring, weaving, spinning and weaving operations</option>
<option value="truck driving, loading and unloading truck, tying down load   [ScoobMETs=6.5]">truck driving, loading and unloading truck, tying down load</option>
<option value="Truch, driving delivery truck, taxi, shuttlebus, school bus   [ScoobMETs=2]">Truch, driving delivery truck, taxi, shuttlebus, school bus</option>
<option value="typing, electric, manual or computer   [ScoobMETs=1.3]">typing, electric, manual or computer</option>
<option value="using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)   [ScoobMETs=6.3]">using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)</option>
<option value="using heavy tools (not power) such as shovel, pick, tunnel bar, spade   [ScoobMETs=8]">using heavy tools (not power) such as shovel, pick, tunnel bar, spade</option>
<option value="walking on job, less than 2.0 mph, very slow speed, in office or lab area   [ScoobMETs=2]">walking on job, less than 2.0 mph, very slow speed, in office or lab area</option>
<option value="walking on job, 3.0 mph, in office, moderate speed, not carrying anything   [ScoobMETs=3.5]">walking on job, 3.0 mph, in office, moderate speed, not carrying anything</option>
<option value="walking on job, 3.5 mph, in office, brisk speed, not carrying anything   [ScoobMETs=4.3]">walking on job, 3.5 mph, in office, brisk speed, not carrying anything</option>
<option value="walking on job, 2.5 mph, slow speed and carrying light objects less than 25 lbs   [ScoobMETs=3.5]">walking on job, 2.5 mph, slow speed and carrying light objects less than 25 lbs</option>
<option value="walking, gathering things at work, ready to leave   [ScoobMETs=3]">walking, gathering things at work, ready to leave</option>
<option value="walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs   [ScoobMETs=3.8]">walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs</option>
<option value="walking, 3.0 mph, moderately and carrying light objects less than 25 lbs   [ScoobMETs=4.5]">walking, 3.0 mph, moderately and carrying light objects less than 25 lbs</option>
<option value="walking, pushing a wheelchair   [ScoobMETs=3.5]">walking, pushing a wheelchair</option>
<option value="walking, 3.5 mph, briskly and carrying objects less than 25 lbs   [ScoobMETs=4.8]">walking, 3.5 mph, briskly and carrying objects less than 25 lbs</option>
<option value="walking or walk downstairs or standing, carrying objects about 25 to 49 lbs   [ScoobMETs=5]">walking or walk downstairs or standing, carrying objects about 25 to 49 lbs</option>
<option value="walking or walk downstairs or standing, carrying objects about 50 to 74 lbs   [ScoobMETs=6.5]">walking or walk downstairs or standing, carrying objects about 50 to 74 lbs</option>
<option value="walking or walk downstairs or standing, carrying objects about 75 to 99 lbs   [ScoobMETs=7.5]">walking or walk downstairs or standing, carrying objects about 75 to 99 lbs</option>
<option value="walking or walk downstairs or standing, carrying objects about 100 lbs or more   [ScoobMETs=8.5]">walking or walk downstairs or standing, carrying objects about 100 lbs or more</option>
<option value="working in scene shop, theater actor, backstage employee   [ScoobMETs=3]">working in scene shop, theater actor, backstage employee</option> 
</select>
      
      <label>Sports</label>	
      
      <select name="activitySports">
<option value="choose one activity   [ScoobMETs=1]">choose one activity</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="archery, non-hunting   [ScoobMETs=4.3]">archery, non-hunting</option>
<option value="badminton, competitive ( 450)   [ScoobMETs=7]">badminton, competitive ( 450)</option>
<option value="badminton, social singles and doubles, general   [ScoobMETs=5.5]">badminton, social singles and doubles, general</option>
<option value="basketball, game ( 490)   [ScoobMETs=8]">basketball, game ( 490)</option>
<option value="basketball, non-game, general ( 480)   [ScoobMETs=6]">basketball, non-game, general ( 480)</option>
<option value="basketball, general   [ScoobMETs=6.5]">basketball, general</option>
<option value="basketball, officiating ( 500)   [ScoobMETs=7]">basketball, officiating ( 500)</option>
<option value="basketball, shooting baskets   [ScoobMETs=4.5]">basketball, shooting baskets</option>
<option value="basketball, drills, practice   [ScoobMETs=9.3]">basketball, drills, practice</option>
<option value="basketball, wheelchair   [ScoobMETs=7.8]">basketball, wheelchair</option>
<option value="billiards   [ScoobMETs=2.5]">billiards</option>
<option value="bowling ( 390)   [ScoobMETs=3]">bowling ( 390)</option>
<option value="bowling, indoor, bowling alley   [ScoobMETs=3.8]">bowling, indoor, bowling alley</option>
<option value="boxing, in ring, general   [ScoobMETs=12.8]">boxing, in ring, general</option>
<option value="boxing, punching bag   [ScoobMETs=5.5]">boxing, punching bag</option>
<option value="boxing, sparring   [ScoobMETs=7.8]">boxing, sparring</option>
<option value="broomball   [ScoobMETs=7]">broomball</option>
<option value="childrens games, hopscotch, 4-square, dodgeball,  tetherball   [ScoobMETs=5.8]">childrens games, hopscotch, 4-square, dodgeball,  tetherball</option>
<option value="cheerleading, gymnastic moves, competitive   [ScoobMETs=6]">cheerleading, gymnastic moves, competitive</option>
<option value="coaching, football, soccer, basketball, baseball, swimming, etc.   [ScoobMETs=4]">coaching, football, soccer, basketball, baseball, swimming, etc.</option>
<option value="coaching, actively playing sport with players   [ScoobMETs=8]">coaching, actively playing sport with players</option>
<option value="cricket, batting, bowling, fielding   [ScoobMETs=4.8]">cricket, batting, bowling, fielding</option>
<option value="croquet   [ScoobMETs=3.3]">croquet</option>
<option value="curling   [ScoobMETs=4]">curling</option>
<option value="darts, wall or lawn   [ScoobMETs=2.5]">darts, wall or lawn</option>
<option value="drag racing, pushing or driving a car   [ScoobMETs=6]">drag racing, pushing or driving a car</option>
<option value="auto racing, open wheel   [ScoobMETs=8.5]">auto racing, open wheel</option>
<option value="fencing   [ScoobMETs=6]">fencing</option>
<option value="football, competitive   [ScoobMETs=8]">football, competitive</option>
<option value="football, touch, flag, general ( 510)   [ScoobMETs=8]">football, touch, flag, general ( 510)</option>
<option value="football, touch, flag, light effort   [ScoobMETs=4]">football, touch, flag, light effort</option>
<option value="football or baseball, playing catch   [ScoobMETs=2.5]">football or baseball, playing catch</option>
<option value="frisbee playing, general   [ScoobMETs=3]">frisbee playing, general</option>
<option value="frisbee, ultimate   [ScoobMETs=8]">frisbee, ultimate</option>
<option value="golf, general   [ScoobMETs=4.8]">golf, general</option>
<option value="golf, walking, carrying clubs   [ScoobMETs=4.3]">golf, walking, carrying clubs</option>
<option value="golf, miniature, driving range   [ScoobMETs=3]">golf, miniature, driving range</option>
<option value="golf, walking, pulling clubs   [ScoobMETs=5.3]">golf, walking, pulling clubs</option>
<option value="golf, using power cart ( 070)   [ScoobMETs=3.5]">golf, using power cart ( 070)</option>
<option value="gymnastics, general   [ScoobMETs=3.8]">gymnastics, general</option>
<option value="hacky sack   [ScoobMETs=4]">hacky sack</option>
<option value="handball, general ( 520)   [ScoobMETs=12]">handball, general ( 520)</option>
<option value="handball, team   [ScoobMETs=8]">handball, team</option>
<option value="high ropes course, multiple elements   [ScoobMETs=4]">high ropes course, multiple elements</option>
<option value="hang gliding   [ScoobMETs=3.5]">hang gliding</option>
<option value="hockey, field   [ScoobMETs=7.8]">hockey, field</option>
<option value="hockey, ice, general   [ScoobMETs=8]">hockey, ice, general</option>
<option value="hockey, ice, competitive   [ScoobMETs=10]">hockey, ice, competitive</option>
<option value="horseback riding, general   [ScoobMETs=5.5]">horseback riding, general</option>
<option value="horse chores, feeding, watering, cleaning stalls   [ScoobMETs=4.3]">horse chores, feeding, watering, cleaning stalls</option>
<option value="saddling, cleaning, grooming, harnessing and unharnessing horse   [ScoobMETs=4.5]">saddling, cleaning, grooming, harnessing and unharnessing horse</option>
<option value="horseback riding, trotting   [ScoobMETs=5.8]">horseback riding, trotting</option>
<option value="horseback riding, canter or gallop   [ScoobMETs=7.3]">horseback riding, canter or gallop</option>
<option value="horseback riding,walking   [ScoobMETs=3.8]">horseback riding,walking</option>
<option value="horseback riding, jumping   [ScoobMETs=9]">horseback riding, jumping</option>
<option value="horse cart, driving, standing or sitting   [ScoobMETs=1.8]">horse cart, driving, standing or sitting</option>
<option value="horseshoe pitching, quoits   [ScoobMETs=3]">horseshoe pitching, quoits</option>
<option value="jai alai   [ScoobMETs=12]">jai alai</option>
<option value="martial arts, slower pace, novice performers, practice   [ScoobMETs=5.3]">martial arts, slower pace, novice performers, practice</option>
<option value="martial arts, moderate pace (judo, jujitsu, karate, kick boxing, tae kwan do)   [ScoobMETs=10.3]">martial arts, moderate pace (judo, jujitsu, karate, kick boxing, tae kwan do)</option>
<option value="juggling   [ScoobMETs=4]">juggling</option>
<option value="kickball   [ScoobMETs=7]">kickball</option>
<option value="lacrosse   [ScoobMETs=8]">lacrosse</option>
<option value="lawn bowling, bocce ball, outdoor   [ScoobMETs=3.3]">lawn bowling, bocce ball, outdoor</option>
<option value="moto-cross, off-road motor sports, all-terrain vehicle, general   [ScoobMETs=4]">moto-cross, off-road motor sports, all-terrain vehicle, general</option>
<option value="orienteering   [ScoobMETs=9]">orienteering</option>
<option value="paddleball, competitive   [ScoobMETs=10]">paddleball, competitive</option>
<option value="paddleball, casual, general    [ScoobMETs=6]">paddleball, casual, general </option>
<option value="polo, on horseback   [ScoobMETs=8]">polo, on horseback</option>
<option value="racquetball, competitive   [ScoobMETs=10]">racquetball, competitive</option>
<option value="racquetball, general   [ScoobMETs=7]">racquetball, general</option>
<option value="rock or mountain climbing    [ScoobMETs=8]">rock or mountain climbing </option>
<option value="rock climbing, ascending rock, high difficulty   [ScoobMETs=7.5]">rock climbing, ascending rock, high difficulty</option>
<option value="rock climbing, ascending or traversing rock, low-to-moderate difficulty   [ScoobMETs=5.8]">rock climbing, ascending or traversing rock, low-to-moderate difficulty</option>
<option value="rock climbing, rappelling   [ScoobMETs=5]">rock climbing, rappelling</option>
<option value="rodeo sports, general, light effort   [ScoobMETs=4]">rodeo sports, general, light effort</option>
<option value="rodeo sports, general, moderate effort   [ScoobMETs=5.5]">rodeo sports, general, moderate effort</option>
<option value="rodeo sports, general, vigorous effort   [ScoobMETs=7]">rodeo sports, general, vigorous effort</option>
<option value="rope jumping, fast pace, 120-160 skips/min   [ScoobMETs=12.3]">rope jumping, fast pace, 120-160 skips/min</option>
<option value="rope jumping, moderate pace, 100-120 skips/min, 2 foot skip, plain bounce   [ScoobMETs=11.8]">rope jumping, moderate pace, 100-120 skips/min, 2 foot skip, plain bounce</option>
<option value="rope jumping under 100 skips/min, 2 foot skip, rhythm bounce   [ScoobMETs=8.8]">rope jumping under 100 skips/min, 2 foot skip, rhythm bounce</option>
<option value="rugby, union, team, competitive   [ScoobMETs=8.3]">rugby, union, team, competitive</option>
<option value="rugby, touch, non-competitive   [ScoobMETs=6.3]">rugby, touch, non-competitive</option>
<option value="shuffleboard   [ScoobMETs=3]">shuffleboard</option>
<option value="skateboarding, general, moderate effort   [ScoobMETs=5]">skateboarding, general, moderate effort</option>
<option value="skateboarding, competitive, vigorous effort   [ScoobMETs=6]">skateboarding, competitive, vigorous effort</option>
<option value="skating, roller   [ScoobMETs=7]">skating, roller</option>
<option value="rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace   [ScoobMETs=7.5]">rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace</option>
<option value="rollerblading, in-line skating, 17.7 km/h (11.0 mph)   [ScoobMETs=9.8]">rollerblading, in-line skating, 17.7 km/h (11.0 mph)</option>
<option value="rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph)   [ScoobMETs=12.3]">rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph)</option>
<option value="rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort   [ScoobMETs=14]">rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort</option>
<option value="skydiving, base jumping, bungee jumping   [ScoobMETs=3.5]">skydiving, base jumping, bungee jumping</option>
<option value="soccer, competitive   [ScoobMETs=10]">soccer, competitive</option>
<option value="soccer, casual, general    [ScoobMETs=7]">soccer, casual, general </option>
<option value="softball or baseball, fast or slow pitch, general    [ScoobMETs=5]">softball or baseball, fast or slow pitch, general </option>
<option value="softball, practice   [ScoobMETs=4]">softball, practice</option>
<option value="softball, officiating   [ScoobMETs=4]">softball, officiating</option>
<option value="softball,pitching   [ScoobMETs=6]">softball,pitching</option>
<option value="sports spectator, very excited, emotional, physically moving   [ScoobMETs=3.3]">sports spectator, very excited, emotional, physically moving</option>
<option value="squash    [ScoobMETs=12]">squash </option>
<option value="squash, general   [ScoobMETs=7.3]">squash, general</option>
<option value="table tennis, ping pong    [ScoobMETs=4]">table tennis, ping pong </option>
<option value="tai chi, qi gong, general   [ScoobMETs=3]">tai chi, qi gong, general</option>
<option value="tai chi, qi gong, sitting, light effort   [ScoobMETs=1.5]">tai chi, qi gong, sitting, light effort</option>
<option value="tennis, general   [ScoobMETs=7.3]">tennis, general</option>
<option value="tennis, doubles    [ScoobMETs=6]">tennis, doubles </option>
<option value="tennis, doubles   [ScoobMETs=4.5]">tennis, doubles</option>
<option value="tennis, singles    [ScoobMETs=8]">tennis, singles </option>
<option value="tennis, hitting balls, non-game play, moderate effort   [ScoobMETs=5]">tennis, hitting balls, non-game play, moderate effort</option>
<option value="trampoline, recreational   [ScoobMETs=3.5]">trampoline, recreational</option>
<option value="trampoline, competitive   [ScoobMETs=4.5]">trampoline, competitive</option>
<option value="volleyball    [ScoobMETs=4]">volleyball </option>
<option value="volleyball, competitive, in gymnasium   [ScoobMETs=6]">volleyball, competitive, in gymnasium</option>
<option value="volleyball, non-competitive, 6 - 9 member team, general   [ScoobMETs=3]">volleyball, non-competitive, 6 – 9 member team, general</option>
<option value="volleyball, beach, in sand   [ScoobMETs=8]">volleyball, beach, in sand</option>
<option value="wrestling (one match = 5 minutes)   [ScoobMETs=6]">wrestling (one match = 5 minutes)</option>
<option value="wallyball, general   [ScoobMETs=7]">wallyball, general</option>
<option value="track and field (e.g., shot, discus, hammer throw)   [ScoobMETs=4]">track and field (e.g., shot, discus, hammer throw)</option>
<option value="track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)   [ScoobMETs=6]">track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)</option>
<option value="track and field (e.g., steeplechase, hurdles)   [ScoobMETs=10]">track and field (e.g., steeplechase, hurdles)</option>
<option value="hunting, hiking with hunting gear   [ScoobMETs=9.5]">hunting, hiking with hunting gear</option>
<option value="pistol shooting or trap shooting, standing   [ScoobMETs=2.5]">pistol shooting or trap shooting, standing</option>
<option value="rifle exercises, shooting, lying down   [ScoobMETs=2.3]">rifle exercises, shooting, lying down</option>
<option value="rifle exercises, shooting, kneeling or standing   [ScoobMETs=2.5]">rifle exercises, shooting, kneeling or standing</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="jog/walk combination (jogging component of less than 10 minutes) ( 180)   [ScoobMETs=6]">jog/walk combination (jogging component of less than 10 minutes) ( 180)</option>
<option value="jogging, general   [ScoobMETs=7]">jogging, general</option>
<option value="jogging, in place   [ScoobMETs=8]">jogging, in place</option>
<option value="jogging, on a mini-tramp   [ScoobMETs=4.5]">jogging, on a mini-tramp</option>
<option value="Running, 4 mph (13 min/mile)   [ScoobMETs=6]">Running, 4 mph (13 min/mile)</option>
<option value="running, 5 mph (12 min/mile)   [ScoobMETs=8.3]">running, 5 mph (12 min/mile)</option>
<option value="running, 5.2 mph (11.5 min/mile)   [ScoobMETs=9]">running, 5.2 mph (11.5 min/mile)</option>
<option value="running, 6 mph (10 min/mile)   [ScoobMETs=9.8]">running, 6 mph (10 min/mile)</option>
<option value="running, 6.7 mph (9 min/mile)   [ScoobMETs=10.5]">running, 6.7 mph (9 min/mile)</option>
<option value="running, 7 mph (8.5 min/mile)   [ScoobMETs=11]">running, 7 mph (8.5 min/mile)</option>
<option value="running, 7.5 mph (8 min/mile)   [ScoobMETs=11.5]">running, 7.5 mph (8 min/mile)</option>
<option value="running, 8 mph (7.5 min/mile)   [ScoobMETs=11.8]">running, 8 mph (7.5 min/mile)</option>
<option value="running, 8.6 mph (7 min/mile)   [ScoobMETs=12.3]">running, 8.6 mph (7 min/mile)</option>
<option value="running, 9 mph (6.5 min/mile)   [ScoobMETs=12.8]">running, 9 mph (6.5 min/mile)</option>
<option value="running, 10 mph (6 min/mile)   [ScoobMETs=14.5]">running, 10 mph (6 min/mile)</option>
<option value="running, 11 mph (5.5 min/mile)   [ScoobMETs=16]">running, 11 mph (5.5 min/mile)</option>
<option value="running, 12 mph (5 min/mile)   [ScoobMETs=19]">running, 12 mph (5 min/mile)</option>
<option value="running, 13 mph (4.6 min/mile)   [ScoobMETs=19.8]">running, 13 mph (4.6 min/mile)</option>
<option value="running, 14 mph (4.3 min/mile)   [ScoobMETs=23]">running, 14 mph (4.3 min/mile)</option>
<option value="running, cross country   [ScoobMETs=9]">running, cross country</option>
<option value="running, ( 200)   [ScoobMETs=8]">running, ( 200)</option>
<option value="running, stairs, up   [ScoobMETs=15]">running, stairs, up</option>
<option value="running, on a track, team practice   [ScoobMETs=10]">running, on a track, team practice</option>
<option value="running, training, pushing a wheelchair or baby carrier   [ScoobMETs=8]">running, training, pushing a wheelchair or baby carrier</option>
<option value="running, marathon   [ScoobMETs=13.3]">running, marathon</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="bicycling, mountain, uphill, vigorous   [ScoobMETs=14]">bicycling, mountain, uphill, vigorous</option>
<option value="bicycling, mountain, competitive, racing   [ScoobMETs=16]">bicycling, mountain, competitive, racing</option>
<option value="bicycling, BMX   [ScoobMETs=8.5]">bicycling, BMX</option>
<option value="bicycling, mountain, general   [ScoobMETs=8.5]">bicycling, mountain, general</option>
<option value="bicycling,  under 10 mph, leisure, to work or for pleasure   [ScoobMETs=4]">bicycling,  under 10 mph, leisure, to work or for pleasure</option>
<option value="bicycling, to/from work, self selected pace   [ScoobMETs=6.8]">bicycling, to/from work, self selected pace</option>
<option value="bicycling, on dirt or farm road, moderate pace   [ScoobMETs=5.8]">bicycling, on dirt or farm road, moderate pace</option>
<option value="bicycling, general   [ScoobMETs=7.5]">bicycling, general</option>
<option value="bicycling, leisure, 5.5 mph   [ScoobMETs=3.5]">bicycling, leisure, 5.5 mph</option>
<option value="bicycling, leisure, 9.4 mph   [ScoobMETs=5.8]">bicycling, leisure, 9.4 mph</option>
<option value="bicycling, 10-11.9 mph, leisure, slow, light effort   [ScoobMETs=6.8]">bicycling, 10-11.9 mph, leisure, slow, light effort</option>
<option value="bicycling, 12-13.9 mph, leisure, moderate effort   [ScoobMETs=8]">bicycling, 12-13.9 mph, leisure, moderate effort</option>
<option value="bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort   [ScoobMETs=10]">bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort</option>
<option value="bicycling, 16-19 mph not drafting or over 19 mph drafting   [ScoobMETs=12]">bicycling, 16-19 mph not drafting or over 19 mph drafting</option>
<option value="bicycling over 20 mph, racing, not drafting   [ScoobMETs=15.8]">bicycling over 20 mph, racing, not drafting</option>
<option value="bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm   [ScoobMETs=8.5]">bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm</option>
<option value="bicycling, 12 mph, standing, hands on brake hoods, 60 rpm   [ScoobMETs=9]">bicycling, 12 mph, standing, hands on brake hoods, 60 rpm</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="backpacking    [ScoobMETs=7]">backpacking </option>
<option value="backpacking, hiking or organized walking with a daypack   [ScoobMETs=7.8]">backpacking, hiking or organized walking with a daypack</option>
<option value="carrying 15 pound load (e.g. suitcase), level ground or downstairs   [ScoobMETs=5]">carrying 15 pound load (e.g. suitcase), level ground or downstairs</option>
<option value="hiking, cross country    [ScoobMETs=6]">hiking, cross country </option>
<option value="hiking or walking at a normal pace through fields and hillsides   [ScoobMETs=5.3]">hiking or walking at a normal pace through fields and hillsides</option>
<option value="bird watching, slow walk   [ScoobMETs=2.5]">bird watching, slow walk</option>
<option value="marching, moderate speed, military, no pack   [ScoobMETs=4.5]">marching, moderate speed, military, no pack</option>
<option value="marching rapidly, military, no pack   [ScoobMETs=8]">marching rapidly, military, no pack</option>
<option value="pushing or pulling stroller, 2.5 to 3.1 mph   [ScoobMETs=4]">pushing or pulling stroller, 2.5 to 3.1 mph</option>
<option value="pushing a wheelchair, non-occupational   [ScoobMETs=3.8]">pushing a wheelchair, non-occupational</option>
<option value="race walking   [ScoobMETs=6.5]">race walking</option>
<option value="stair climbing, using or climbing up ladder    [ScoobMETs=8]">stair climbing, using or climbing up ladder </option>
<option value="stair climbing, slow pace   [ScoobMETs=4]">stair climbing, slow pace</option>
<option value="stair climbing, fast pace   [ScoobMETs=8.8]">stair climbing, fast pace</option>
<option value="using crutches   [ScoobMETs=5]">using crutches</option>
<option value="walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace   [ScoobMETs=9.5]">walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace</option>
<option value="walking, for exercise, with ski poles, Nordic walking, uphill   [ScoobMETs=6.8]">walking, for exercise, with ski poles, Nordic walking, uphill</option>
<option value="walking, backwards, 3.5 mph, level   [ScoobMETs=6]">walking, backwards, 3.5 mph, level</option>
<option value="walking, backwards, 3.5 mph, uphill, 5% grade   [ScoobMETs=8]">walking, backwards, 3.5 mph, uphill, 5% grade</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="boating, power, driving   [ScoobMETs=2.5]">boating, power, driving</option>
<option value="boating, power, passenger, light   [ScoobMETs=1.3]">boating, power, passenger, light</option>
<option value="canoeing, on camping trip    [ScoobMETs=4]">canoeing, on camping trip </option>
<option value="canoeing, harvesting wild rice, knocking rice off the stalks   [ScoobMETs=3.3]">canoeing, harvesting wild rice, knocking rice off the stalks</option>
<option value="canoeing, portaging   [ScoobMETs=7]">canoeing, portaging</option>
<option value="canoeing, rowing, 2.0-3.9 mph, light effort   [ScoobMETs=2.8]">canoeing, rowing, 2.0-3.9 mph, light effort</option>
<option value="canoeing, rowing, 4.0-5.9 mph, moderate effort   [ScoobMETs=5.8]">canoeing, rowing, 4.0-5.9 mph, moderate effort</option>
<option value="canoeing, rowing, kayaking, competition,  over 6 mph, vigorous effort   [ScoobMETs=12.5]">canoeing, rowing, kayaking, competition,  over 6 mph, vigorous effort</option>
<option value="canoeing, rowing, for pleasure, general    [ScoobMETs=3.5]">canoeing, rowing, for pleasure, general </option>
<option value="canoeing, rowing, in competition, or crew or sculling    [ScoobMETs=12]">canoeing, rowing, in competition, or crew or sculling </option>
<option value="diving, springboard or platform   [ScoobMETs=3]">diving, springboard or platform</option>
<option value="kayaking, moderate effort   [ScoobMETs=5]">kayaking, moderate effort</option>
<option value="paddle boat   [ScoobMETs=4]">paddle boat</option>
<option value="sailing, boat and board sailing, windsurfing, ice sailing, general    [ScoobMETs=3]">sailing, boat and board sailing, windsurfing, ice sailing, general </option>
<option value="sailing, in competition   [ScoobMETs=4.5]">sailing, in competition</option>
<option value="sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure   [ScoobMETs=3.3]">sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure</option>
<option value="skiing, water or wakeboarding    [ScoobMETs=6]">skiing, water or wakeboarding </option>
<option value="jet skiing, driving, in water   [ScoobMETs=7]">jet skiing, driving, in water</option>
<option value="skindiving, fast   [ScoobMETs=15.8]">skindiving, fast</option>
<option value="skindiving, moderate   [ScoobMETs=11.8]">skindiving, moderate</option>
<option value="skindiving, scuba diving, general    [ScoobMETs=7]">skindiving, scuba diving, general </option>
<option value="snorkeling   [ScoobMETs=5]">snorkeling</option>
<option value="surfing, body or board, general   [ScoobMETs=3]">surfing, body or board, general</option>
<option value="surfing, body or board, competitive   [ScoobMETs=5]">surfing, body or board, competitive</option>
<option value="paddle boarding, standing   [ScoobMETs=6]">paddle boarding, standing</option>
<option value="swimming laps, freestyle, fast, vigorous effort   [ScoobMETs=9.8]">swimming laps, freestyle, fast, vigorous effort</option>
<option value="swimming laps, freestyle, front crawl, slow, light or moderate effort   [ScoobMETs=5.8]">swimming laps, freestyle, front crawl, slow, light or moderate effort</option>
<option value="swimming, backstroke, general, training or competition   [ScoobMETs=9.5]">swimming, backstroke, general, training or competition</option>
<option value="swimming, backstroke, recreational   [ScoobMETs=4.8]">swimming, backstroke, recreational</option>
<option value="swimming, breaststroke, general, training or competition   [ScoobMETs=10.3]">swimming, breaststroke, general, training or competition</option>
<option value="swimming, breaststroke, recreational   [ScoobMETs=5.3]">swimming, breaststroke, recreational</option>
<option value="swimming, butterfly, general   [ScoobMETs=13.8]">swimming, butterfly, general</option>
<option value="swimming, crawl, fast speed, ~75 yards/minute, vigorous effort   [ScoobMETs=10]">swimming, crawl, fast speed, ~75 yards/minute, vigorous effort</option>
<option value="swimming, crawl, medium speed, ~50 yards/minute, vigorous effort   [ScoobMETs=8.3]">swimming, crawl, medium speed, ~50 yards/minute, vigorous effort</option>
<option value="swimming, lake, ocean, river    [ScoobMETs=6]">swimming, lake, ocean, river </option>
<option value="swimming, leisurely, not lap swimming, general   [ScoobMETs=6]">swimming, leisurely, not lap swimming, general</option>
<option value="swimming, sidestroke, general   [ScoobMETs=7]">swimming, sidestroke, general</option>
<option value="swimming, synchronized   [ScoobMETs=8]">swimming, synchronized</option>
<option value="swimming, treading water, fast, vigorous effort   [ScoobMETs=9.8]">swimming, treading water, fast, vigorous effort</option>
<option value="swimming, treading water, moderate effort, general   [ScoobMETs=3.5]">swimming, treading water, moderate effort, general</option>
<option value="tubing, floating on a river, general   [ScoobMETs=2.3]">tubing, floating on a river, general</option>
<option value="water aerobics, water calisthenics   [ScoobMETs=5.5]">water aerobics, water calisthenics</option>
<option value="water polo   [ScoobMETs=10]">water polo</option>
<option value="water volleyball   [ScoobMETs=3]">water volleyball</option>
<option value="water jogging   [ScoobMETs=9.8]">water jogging</option>
<option value="water walking, light effort, slow pace   [ScoobMETs=2.5]">water walking, light effort, slow pace</option>
<option value="water walking, moderate effort, moderate pace   [ScoobMETs=4.5]">water walking, moderate effort, moderate pace</option>
<option value="water walking, vigorous effort, brisk pace   [ScoobMETs=6.8]">water walking, vigorous effort, brisk pace</option>
<option value="whitewater rafting, kayaking, or canoeing   [ScoobMETs=5]">whitewater rafting, kayaking, or canoeing</option>
<option value="windsurfing, not pumping for speed   [ScoobMETs=5]">windsurfing, not pumping for speed</option>
<option value="windsurfing or kitesurfing, crossing trial   [ScoobMETs=11]">windsurfing or kitesurfing, crossing trial</option>
<option value="windsurfing, competition, pumping for speed   [ScoobMETs=13.5]">windsurfing, competition, pumping for speed</option>
<option value="----------------------------------   [ScoobMETs=1]">———————————-</option>
<option value="dog sledding, mushing   [ScoobMETs=7.5]">dog sledding, mushing</option>
<option value="dog sledding, passenger   [ScoobMETs=2.5]">dog sledding, passenger</option>
<option value="moving ice house, set up/drill holes   [ScoobMETs=6]">moving ice house, set up/drill holes</option>
<option value="ice fishing, sitting   [ScoobMETs=2]">ice fishing, sitting</option>
<option value="skating, ice dancing   [ScoobMETs=14]">skating, ice dancing</option>
<option value="skating, ice, 9 mph or less   [ScoobMETs=5.5]">skating, ice, 9 mph or less</option>
<option value="skating, ice, general ( 360)   [ScoobMETs=7]">skating, ice, general ( 360)</option>
<option value="skating, ice, rapidly, more than 9 mph, not competitive   [ScoobMETs=9]">skating, ice, rapidly, more than 9 mph, not competitive</option>
<option value="skating, speed, competitive   [ScoobMETs=13.3]">skating, speed, competitive</option>
<option value="ski jumping, climb up carrying skis   [ScoobMETs=7]">ski jumping, climb up carrying skis</option>
<option value="skiing, general   [ScoobMETs=7]">skiing, general</option>
<option value="skiing, cross country, 2.5 mph, slow or light effort, ski walking   [ScoobMETs=6.8]">skiing, cross country, 2.5 mph, slow or light effort, ski walking</option>
<option value="skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general   [ScoobMETs=9]">skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general</option>
<option value="skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort   [ScoobMETs=12.5]">skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort</option>
<option value="skiing, cross country, over 8.0 mph, elite skier, racing   [ScoobMETs=15]">skiing, cross country, over 8.0 mph, elite skier, racing</option>
<option value="skiing, cross country, hard snow, uphill, maximum, snow mountaineering   [ScoobMETs=15.5]">skiing, cross country, hard snow, uphill, maximum, snow mountaineering</option>
<option value="skiing, cross-country, skating   [ScoobMETs=13.3]">skiing, cross-country, skating</option>
<option value="skiing, cross-country, biathlon, skating technique   [ScoobMETs=13.5]">skiing, cross-country, biathlon, skating technique</option>
<option value="skiing, downhill, alpine or snowboarding, light effort, active time only   [ScoobMETs=4.3]">skiing, downhill, alpine or snowboarding, light effort, active time only</option>
<option value="skiing, downhill, alpine or snowboarding, moderate effort   [ScoobMETs=5.3]">skiing, downhill, alpine or snowboarding, moderate effort</option>
<option value="skiing, downhill, vigorous effort, racing   [ScoobMETs=8]">skiing, downhill, vigorous effort, racing</option>
<option value="skiing, roller, elite racers   [ScoobMETs=12.5]">skiing, roller, elite racers</option>
<option value="sledding, tobogganing, bobsledding, luge    [ScoobMETs=7]">sledding, tobogganing, bobsledding, luge </option>
<option value="snow shoeing, moderate effort   [ScoobMETs=5.3]">snow shoeing, moderate effort</option>
<option value="snow shoeing, vigorous effort   [ScoobMETs=10]">snow shoeing, vigorous effort</option>
<option value="snowmobiling, driving, moderate   [ScoobMETs=3.5]">snowmobiling, driving, moderate</option>
<option value="snowmobiling, passenger   [ScoobMETs=2]">snowmobiling, passenger</option>
</select>

      <label>Around The House</label>
   
      <select name="activityHouse">
        <option *ngFor="let activity of houseActivity">{{activity}}</option>
      </select>
  </div>
  
      <h4>Step 6: Exercise Duration	Hours:    Min:</h4>
      <label>Hours</label>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>19</option>
      </select>
      
       <label>Minutes</label>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>19</option>
      </select>
      </form></div>
     <div class="callout--more-questions"> 
Click here to answer more questions for precision!
      </div>
      
 <div style="display: none">
Step 7: Enter Research Model	
Step 8: METs Correction	

Calories Burned

 	Your RMR	
 	Activity:	
 	Research Model:	
 	METs	
 	corrected METs	
 	Duration:	
 	Calories Used By Exercise:	
  Whats the difference between burned ‘during’ and ‘by’?
 	Calories Used During Exercise:	
  Whats the difference between burned ‘during’ and ‘by’?
      </div>
      <div class="form__submit-holder">
      <button type="submit">See results</button>
      </div>
    
  </div>
  <div class="layout__right">
    <results></results>
    <div class="ads">
     <img src="http://w0.fast-meteo.com/locationmaps/Gravesend.12.gif">
    </div>
  </div>
</div>
    `
})
export class BurnedCaloriesComponent { 
    public houseActivity: Object = [
"cleaning, sweeping carpet or floors, general",
"cleaning, sweeping, slow, light effort",
"cleaning, sweeping, slow, moderate effort",
"cleaning, heavy or major (e.g. wash car, wash windows), moderate effort",
"cleaning, mopping, standing, moderate effort",
"cleaning windows, washing windows, general",
"mopping, standing, light effort",
"polishing floors, standing, walking slowly, using electric polishing machine",
"multiple household tasks all at once, light effort",
"multiple household tasks all at once, moderate effort",
"multiple household tasks all at once, vigorous effort",
"cleaning, house or cabin, general, moderate effort",
"dusting or polishing furniture, general",
"kitchen activity (cooking, washing dishes, cleaning up), moderate effort",
"cleaning, straightening up, changing linen, carrying out trash",
"wash dishes, standing",
"wash dishes, clearing dishes from table, walking, light effort",
"vacuuming, general, moderate effort",
"butchering animals, small",
"butchering animal, large, vigorous effort",
"cutting and smoking fish, drying fish or meat",
"tanning hides, general",
"cooking or food preparation, moderate effort",
"cooking or food preparation – standing or sitting, manual appliances",
"serving food, setting table, implied walking or standing",
"cooking or food preparation, walking",
"feeding household animals",
"putting away groceries",
"carrying groceries upstairs",
"cooking Indian bread on an outside stove",
"food shopping with or without a grocery cart, standing or walking",
"non-food shopping, with or without a cart, standing or walking",
"ironing",
"knitting, sewing, light effort, wrapping presents, sitting",
"sewing with a machine",
"laundry, fold or hang clothes",
"laundry, hanging wash, washing clothes by hand, moderate effort",
"laundry, putting away clothes, gathering clothes to pack, putting away laundry",
"making bed, changing linens",
"maple syruping/sugar bushing (including carrying buckets, carrying wood)",
"moving furniture, household items, carrying boxes",
"moving, lifting light loads",
"organizing room",
"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort",
"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort",
"scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort",
"sweeping garage, sidewalk or outside of house",
"standing, packing/unpacking boxes,  loading or unloading items in car",
"implied walking, putting away household items, moderate effort",
"lying quietly and watching television",
"lying quietly, doing nothing, lying in bed awake, listening to music",
"sitting quietly and watching television",
"sitting quietly, general",
"sitting quietly, fidgeting, general, fidgeting hands",
"sitting, fidgeting feet",
"sitting, smoking",
"sitting, listening to music or watching a movie in a theater",
"sitting at a desk, resting head in hands",
"sleeping",
"standing quietly, standing in a line",
"standing, fidgeting",
"reclining, writing",
"reclining, talking or talking on phone",
"reclining, reading",
"meditating",
"mowing lawn, walk, power mower, moderate or vigorous effort",
"raking lawn or leaves, moderate effort",
"sacking grass, leaves",
"shoveling dirt or mud",
"shoveling snow, by hand, moderate effort",
"shoveling snow, by hand ( 610)",
"shoveling snow, by hand, vigorous effort",
"trimming shrubs or trees, manual cutter",
"trimming shrubs or trees, using leaf blower, edger",
"walking, applying fertilizer or seeding a lawn, push applicator",
"watering lawn or garden, standing or walking",
"weeding, cultivating garden, light-to-moderate effort",
"weeding, cultivating garden ( 580)",
"weeding, cultivating garden, using a hoe, moderate-to-vigorous effort",
"gardening, general, moderate effort",
"picking fruit off trees, picking fruits/vegetables, moderate effort",
"picking vegatables or fruit off trees",
"implied walking/standing – picking up yard, light, picking flowers or vegetables",
"walking, gathering gardening tools",
"wheelbarrow, pushing garden cart or wheelbarrow",
"yard work, general, light effort",
"yard work, general, moderate effort",
"yard work, general, vigorous effort"
];

}
