# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

### Requirements

1. Home Screen:
   A clean, minimalist design with a dark theme for better visibility during workouts.
   A large "Start Workout" button at the center of the screen.
   Below, a list of recent workouts or scheduled workouts for quick access.
   A bottom navigation bar with icons for: Home, Exercises, Workouts, and Profile.

1. Exercise Logging Screen:
   At the top, the name of the current workout (e.g., "Upper Body Day").
   Below, a list of exercises for the workout, each in a card format.
   Each exercise card includes:

   - Exercise name
   - Target sets and reps
   - Current set number
   - Large "+" and "-" buttons for easily adjusting reps
   - A "Complete Set" button that turns green when pressed

1. Add Exercise/Workout Screen:
   Two tabs at the top: "Add Exercise" and "Create Workout"

1. Add Exercise tab:
   Fields for exercise name, type (dropdown: Strength, Cardio, Flexibility), and description
   Option to add custom fields (e.g., weight, distance, time)
   "Save Exercise" button at the bottom

1. Create Workout tab:
   Field for workout name
   Search bar to find and add exercises
   List of added exercises with drag handles for reordering
   For each exercise: fields for sets and reps
   "Save Workout" button at the bottom

1. Exercise List Screen:
   A searchable list of all exercises
   Exercises grouped by type (Strength, Cardio, Flexibility)
   Each exercise item shows name and a small icon indicating type
   Tapping an exercise opens a detailed view with description and history

1. Workout List Screen:

   Similar to Exercise List, but for saved workouts
   Each workout item shows name and number of exercises
   Tapping a workout opens the Exercise Logging Screen for that workout

For the easy controls to bump up sets or reps, consider:

- Large, touch-friendly "+" and "-" buttons next to the rep count
- A circular progress indicator around the set number that fills as sets are completed
- Swipe gestures on an exercise to quickly mark it as complete

For future visualizations:

- Reserve space on the Exercise Detail view for a graph showing sets/reps over time
- Consider adding a "Stats" tab to the bottom navigation for overall progress visualizations
