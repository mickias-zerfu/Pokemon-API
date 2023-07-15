# PokemonAPI
Angular Pokémon Project
This Angular project is a Pokémon application that allows users to view a list of Pokémon, filter by type, sort by name, and manage favorites with CRUD operations.

Features

      Display a list of Pokémon with their names, sprites, and types.
      Filter the Pokémon list by type.
      Sort the Pokémon list in ascending or descending order based on their names.
      Add Pokémon to favorites list.
      Remove Pokémon from favorites list.
      Update the name of a Pokémon in the favorites list.
      Remove Pokémon from favorites list.
      Update the name of a Pokémon in the favorites list.
      Load next and previous lists of Pokémon.

Technologies Used
      Angular
      HTML
      CSS
      TypeScript
      PokeAPI (https://pokeapi.co/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 Getting Started
To run the Angular project locally, follow these steps:

Clone the repository: git clone https://github.com/mickias-zerfu/Pokemon-API.git 
Navigate to the project directory: 
cd angular-pokemon-project

Install the dependencies: 
npm install

Run the development server:
 
ng serve
Open your browser and visit http://localhost:4200 to see the running application.

API Calls
This project uses the PokeAPI (https://pokeapi.co/) to fetch Pokémon data. The following API endpoints are used:

      GET /api/v2/pokemon: Retrieves a list of Pokémon.
      GET /api/v2/pokemon/{id}: Retrieves details of a specific Pokémon.
      GET https://pokeapi.co/api/v2/type to retrive all types of pokeman

Favorites CRUD Operations
  The project includes functionality to manage favorites. Here's how the CRUD operations are implemented:

  Create: A feature to add a new Pokémon to a favorites list. Users should be able to search for a Pokémon by name and favorite it by clicking a star button. Once favorited, it should appear in their favorites list on the dashboard.
  Add to Favorites: When viewing the Pokémon list, click the "  Favorites Icon" button to add a Pokémon to the favorites list. The Pokémon will be stored in local storage.
  Remove from Favorites: In the favorites list, click the "Red Favorites Icon" button to remove a Pokémon from the favorites list. The Pokémon will be removed from local storage.
  Update Name: In the favorites list, click the "Update" button to update the name of a Pokémon. Enter the new name in the input field and click "Submit". The Pokémon's name will be updated in the favorites list.
  Filtering and Sorting
  The Pokémon list in this project can be filtered and sorted based on user preferences.

  Filtering: Users can filter the Pokémon list by type. Select a specific type from the provided filter options to display only the Pokémon of that type. All Pokémon will be shown if no filter is applied.

  Sorting: Users can sort the Pokémon list in ascending or descending order based on their names. Click the "Sort A-Z" button to sort the list in ascending order, and click the "Sort Z-A" button to sort the list in descending order.
Loading Next and Previous Lists
  The project provides functionality to load the next and previous lists of Pokémon.

  Next Button: Click the "Next" button to load the next list of Pokémon. The next list will replace the current list on the page.

  Previous Button: Click the "Previous" button to load the previous list of Pokémon. The previous list will replace the current list on the page.


I can Use Material UI but the project scope is simple so ...
