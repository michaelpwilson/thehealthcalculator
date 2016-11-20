import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'burned-calories',
    providers: [DataService],
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
        <option>choose activity</option>
        <option *ngFor="let activity of sportsActivity">{{activity}}</option>
      </select>

      <label>Around The House</label>
   
      <select name="activityHouse">
        <option>choose activity</option>
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
export class BurnedCaloriesComponent implements OnInit { 
    houseActivity: Object;
    sportsActivity: Object;

    constructor(private dataService: DataService) {}

    houseActivities(): void {
        this.houseActivity = this.dataService.getHouseActivities();
    }

    sportActivities(): void {
        this.sportsActivity = this.dataService.getSportActivities();
    }

    ngOnInit(): void {
        this.houseActivities();
        this.sportActivities();
    }

}
