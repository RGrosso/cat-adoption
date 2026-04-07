/**
 * Enum for Cat Genders
 */
export enum Gender {
  Male = "Male",
  Female = "Female"
}

/**
 * Enum for compatibility traits
 */
export enum Compatibility {
  Kids = "Kids",
  Dogs = "Dogs",
  Cats = "Cats",
  Birds = "Birds",
  OtherPets = "Other Pets",
  QuietHomes = "Quiet Homes",
  SeniorCitizens = "Senior Citizens"
}

/**
 * Enum for common breeds
 * (Easier to manage than raw strings for filtering)
 */
export enum Breed {
  Abyssinian = "Abyssinian",
  Birman = "Birman",
  Burmese = "Burmese",
  Chartreux = "Chartreux",
  Persian = "Persian",
  Ragdoll = "Ragdoll",
  RussianBlue = "Russian Blue",
  ScottishFold = "Scottish Fold",
  Siamese = "Siamese",
  MaineCoon = "Maine Coon",
  Bengal = "Bengal",
  Sphynx = "Sphynx"
}

/**
 * Energy Level type restricted to 1-5
 */
export type EnergyLevel = 1 | 2 | 3 | 4 | 5;

/**
 * The primary Cat interface
 */
export type Cat = {
  /** GUID style string id */
  id: string
  name: string
  /** Format: yyyy-mm-dd */
  dob: string
  /** The date the cat was listed for adoption (yyyy-mm-dd) */
  listedDate: string
  description: string
  imageUrl: string
  gender: Gender
  breed: Breed | string // Allows for custom breeds not in the enum
  isVaccinated: boolean
  energyLevel: EnergyLevel
  /** Array of IDs of other cats that must be adopted with this one */
  linkedCats: string[]
  goodWith: Compatibility[]
};

/**
 * The shape of your json-server db.json file
 */
export type CatDatabase = {
  cats: Cat[]
};

/**
 * Interface for the paginated response
 * (Includes the data and the total count for UI calculations)
 */
export type PaginatedCats = {
  data: Cat[]
  totalCount: number
};
