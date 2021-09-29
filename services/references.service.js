const knex = require('../database/db')

module.exports = {
    findAgeReferences,
    findGenderReferences,
    findRelationshipStatusReferences,
    findLocationPreferencesReferences,
    findLivingAbroadReferences,
    findLikelyToTryReferences,
    findLevelAssistanceReferences,
    findYourRetirementReferences
}

//used in the /references/ages endpoint
async function findAgeReferences() {
    let references;
    references = await knex.from("age_references").select("*").distinct();
    return references
}

//used in the /references/genders endpoint
async function findGenderReferences() {
    let references;
    references = await knex.from("gender_references").select("*").distinct();
    return references
}

//used in the /references/relationship_status endpoint
async function findRelationshipStatusReferences() {
    let references;
    references = await knex.from("relationship_status_references").select("*").distinct();
    return references
}

//used in the /references/location_preferences endpoint
async function findLocationPreferencesReferences() {
    let references;
    references = await knex.from("location_preferences_references").select("*").distinct();
    return references
}

//used in the /references/living_abroad endpoint
async function findLivingAbroadReferences() {
    let references;
    references = await knex.from("living_abroad_references").select("*").distinct();
    return references
}

//used in the /references/likely_to_try endpoint
async function findLikelyToTryReferences() {
    let references;
    references = await knex.from("likely_to_try_references").select("*").distinct();
    return references
}

//used in the /references/living_abroad endpoint
async function findLevelAssistanceReferences() {
    let references;
    references = await knex.from("level_assistance_references").select("*").distinct();
    return references
}

//used in the /references/living_abroad endpoint
async function findYourRetirementReferences() {
    let references;
    references = await knex.from("your_retirement_references").select("*").distinct();
    return references
}