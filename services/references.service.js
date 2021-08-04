const knex = require('../database/db')

module.exports = {
    findAgeReferences,
    findGenderReferences,
    findLivingAbroadReferences,
    findLocationPreferencesReferences,
    findMobilityIssuesReferences,
    findPlansToWorkReferences,
    findPropertyReferences,
    findRelationshipStatusReferences,
    findRetirementReferences,
    findReturnToAustraliaReferences,
    findSavedForRetirementReferences,
    findSingleOrCoupleReferences,
    findSuperReferences,
    findWhenRetireReferences
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

//used in the /references/living_abroad endpoint
async function findLivingAbroadReferences() {
    let references;
    references = await knex.from("living_abroad_references").select("*").distinct();
    return references
}

//used in the /references/location_preferences endpoint
async function findLocationPreferencesReferences() {
    let references;
    references = await knex.from("location_preferences_references").select("*").distinct();
    return references
}

//used in the /references/mobility_issues endpoint
async function findMobilityIssuesReferences() {
    let references;
    references = await knex.from("mobility_issues_references").select("*").distinct();
    return references
}

//used in the /references/plans_to_work endpoint
async function findPlansToWorkReferences() {
    let references;
    references = await knex.from("plans_to_work_references").select("*").distinct();
    return references
}

//used in the /references/property endpoint
async function findPropertyReferences() {
    let references;
    references = await knex.from("property_references").select("*").distinct();
    return references
}

//used in the /references/relationship_status endpoint
async function findRelationshipStatusReferences() {
    let references;
    references = await knex.from("relationship_status_references").select("*").distinct();
    return references
}

//used in the /references/retirement endpoint
async function findRetirementReferences() {
    let references;
    references = await knex.from("retirement_references").select("*").distinct();
    return references
}

//used in the /references/return_to_australia endpoint
async function findReturnToAustraliaReferences() {
    let references;
    references = await knex.from("return_to_australia_references").select("*").distinct();
    return references
}

//used in the /references/saved_for_retirement endpoint
async function findSavedForRetirementReferences() {
    let references;
    references = await knex.from("saved_for_retirement_references").select("*").distinct();
    return references
}

//used in the /references/single_or_couple endpoint
async function findSingleOrCoupleReferences() {
    let references;
    references = await knex.from("single_or_couple_references").select("*").distinct();
    return references
}

//used in the /references/super endpoint
async function findSuperReferences() {
    let references;
    references = await knex.from("super_references").select("*").distinct();
    return references
}

//used in the /references/when_retire endpoint
//will find every reference destination in the database
async function findWhenRetireReferences() {
    let references;
    references = await knex.from("when_retire_references").select("*").distinct();
    return references
}