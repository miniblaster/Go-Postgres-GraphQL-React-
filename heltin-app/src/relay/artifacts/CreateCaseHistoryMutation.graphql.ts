/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CaseHistoryAbuseType = "ABUSE_WITNESS" | "BULLYING" | "CYBER_BULLYING" | "EMOTIONAL_ABUSE" | "NEGLECTION" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE";
export type CaseHistoryAccompaniedByType = "FAMILY" | "FATHER" | "MOTHER" | "NO_ONE";
export type CaseHistoryArrivalReasonType = "ABUSE_WITNESS" | "ADDICTION" | "ADHD" | "ANXIETY" | "ATTENTION_PROBLEMS" | "BEHAVIOURAL_PROBLEMS" | "BULLYING" | "COMMUNICATION_PROBLEMS" | "COUPLE_PROBLEMS" | "CYBER_BULLYING" | "DEPRESION_SYMPTOMS" | "DIVORCE" | "DYSGRAPHIA" | "DYSLEXIA" | "EMOTIONAL_ABUSE" | "EMOTIONAL_PROBLEMS" | "GRIEVE" | "LEARNING_PROBLEMS" | "LOSS" | "NEGLECTION" | "NEURO_DEVELOPMENT_DISORDER" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE" | "SLEEP_DEFICIENCY" | "SUICIDAL_THOUGHTS" | "TALKING_ISSUES" | "TRAUMA";
export type CaseHistoryDivorceOutcomeType = "HIGH_CONFLICT" | "LOW_CONFLICT" | "MEDIUM_CONFLICT" | "NO_CONFLICT" | "UNKNOWN";
export type CaseHistoryDivorcedParentsType = "IN_PROCESS" | "NO" | "YES";
export type CaseHistoryIndividualType = "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_MOTHER" | "FRIEND" | "GRANDFATHER" | "GRANDMOTHER" | "LOVER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryLivesWithType = "ALONE" | "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_HOUSE" | "FOSTER_MOTHER" | "GRANDFATHER" | "GRANDMOTHER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryParentsInJailType = "FATHER" | "FATHER_AND_MOTHER" | "MOTHER";
export type CaseHistoryReasonOfMultipleAdoptionsType = "ABUSE" | "LOSS_OF_FOSTER_PARENT" | "NEGLECTION" | "OTHER";
export type CaseHistoryReferralType = "COURT" | "HOSPITAL" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "OTHER" | "PEDIATRIST" | "POLICE" | "PSYCHIATRIST" | "SCHOOL" | "SELF" | "SOCIAL_WORK_CENTER";
export type CaseHistoryReportedAbuseType = "COURT" | "NOT_REPORTED" | "SOCIAL_WORK_CENTER";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CreateCaseHistoryInput = {
    accompaniedBy?: CaseHistoryAccompaniedByType | null;
    adaptedEducationProgram?: boolean | null;
    adoptionAge?: number | null;
    ageDuringLossOfCloseIndividual?: number | null;
    arrivalReason?: Array<CaseHistoryArrivalReasonType | null> | null;
    attendsKindergarten?: boolean | null;
    caseStudyRowId: string;
    caseStudyTreatmentRowId?: string | null;
    clientMutationId?: string | null;
    diagnosedIntelectualDevelopmentProblems?: boolean | null;
    divorceOutcome?: CaseHistoryDivorceOutcomeType | null;
    divorcedParents?: CaseHistoryDivorcedParentsType | null;
    earlierProfessionalHelp?: Array<MentalHealthProfessionalType | null> | null;
    familyHeredity?: string | null;
    furtherAbuses?: Array<CaseHistoryAbuseType | null> | null;
    individualizedEducationProgram?: boolean | null;
    involvedReferral?: boolean | null;
    livesWith?: Array<CaseHistoryLivesWithType | null> | null;
    lossOfCloseIndividual?: Array<CaseHistoryIndividualType | null> | null;
    numberOfAdoptions?: number | null;
    parentsInJail?: CaseHistoryParentsInJailType | null;
    previousTreatment?: string | null;
    ptsp?: string | null;
    reasonOfMultipleAdoptions?: Array<CaseHistoryReasonOfMultipleAdoptionsType | null> | null;
    referral?: Array<CaseHistoryReferralType | null> | null;
    referralDiagnosis?: string | null;
    reportedFurtherAbuses?: CaseHistoryReportedAbuseType | null;
    schoolMark?: number | null;
};
export type CreateCaseHistoryMutationVariables = {
    input: CreateCaseHistoryInput;
};
export type CreateCaseHistoryMutationResponse = {
    readonly createCaseHistory: {
        readonly caseHistory: {
            readonly id: string;
            readonly rowId: string;
            readonly caseStudyRowId: string;
            readonly accompaniedBy: CaseHistoryAccompaniedByType | null;
            readonly adaptedEducationProgram: boolean | null;
            readonly adoptionAge: number | null;
            readonly ageDuringLossOfCloseIndividual: number | null;
            readonly arrivalReason: ReadonlyArray<CaseHistoryArrivalReasonType | null> | null;
            readonly attendsKindergarten: boolean | null;
            readonly diagnosedIntelectualDevelopmentProblems: boolean | null;
            readonly divorceOutcome: CaseHistoryDivorceOutcomeType | null;
            readonly divorcedParents: CaseHistoryDivorcedParentsType | null;
            readonly earlierProfessionalHelp: ReadonlyArray<MentalHealthProfessionalType | null> | null;
            readonly familyHeredity: string | null;
            readonly furtherAbuses: ReadonlyArray<CaseHistoryAbuseType | null> | null;
            readonly individualizedEducationProgram: boolean | null;
            readonly involvedReferral: boolean | null;
            readonly livesWith: ReadonlyArray<CaseHistoryLivesWithType | null> | null;
            readonly lossOfCloseIndividual: ReadonlyArray<CaseHistoryIndividualType | null> | null;
            readonly numberOfAdoptions: number | null;
            readonly parentsInJail: CaseHistoryParentsInJailType | null;
            readonly previousTreatment: string | null;
            readonly ptsp: string | null;
            readonly reasonOfMultipleAdoptions: ReadonlyArray<CaseHistoryReasonOfMultipleAdoptionsType | null> | null;
            readonly referral: ReadonlyArray<CaseHistoryReferralType | null> | null;
            readonly referralDiagnosis: string | null;
            readonly reportedFurtherAbuses: CaseHistoryReportedAbuseType | null;
            readonly schoolMark: number | null;
        } | null;
    } | null;
};
export type CreateCaseHistoryMutation = {
    readonly response: CreateCaseHistoryMutationResponse;
    readonly variables: CreateCaseHistoryMutationVariables;
};



/*
mutation CreateCaseHistoryMutation(
  $input: CreateCaseHistoryInput!
) {
  createCaseHistory(input: $input) {
    caseHistory {
      id
      rowId
      caseStudyRowId
      accompaniedBy
      adaptedEducationProgram
      adoptionAge
      ageDuringLossOfCloseIndividual
      arrivalReason
      attendsKindergarten
      diagnosedIntelectualDevelopmentProblems
      divorceOutcome
      divorcedParents
      earlierProfessionalHelp
      familyHeredity
      furtherAbuses
      individualizedEducationProgram
      involvedReferral
      livesWith
      lossOfCloseIndividual
      numberOfAdoptions
      parentsInJail
      previousTreatment
      ptsp
      reasonOfMultipleAdoptions
      referral
      referralDiagnosis
      reportedFurtherAbuses
      schoolMark
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseHistoryInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCaseHistoryPayload",
    "kind": "LinkedField",
    "name": "createCaseHistory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CaseHistory",
        "kind": "LinkedField",
        "name": "caseHistory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rowId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "caseStudyRowId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accompaniedBy",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "adaptedEducationProgram",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "adoptionAge",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ageDuringLossOfCloseIndividual",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "arrivalReason",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "attendsKindergarten",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "diagnosedIntelectualDevelopmentProblems",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "divorceOutcome",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "divorcedParents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "earlierProfessionalHelp",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "familyHeredity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "furtherAbuses",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "individualizedEducationProgram",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "involvedReferral",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "livesWith",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lossOfCloseIndividual",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "numberOfAdoptions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "parentsInJail",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "previousTreatment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ptsp",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reasonOfMultipleAdoptions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "referral",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "referralDiagnosis",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reportedFurtherAbuses",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "schoolMark",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCaseHistoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCaseHistoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateCaseHistoryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseHistoryMutation(\n  $input: CreateCaseHistoryInput!\n) {\n  createCaseHistory(input: $input) {\n    caseHistory {\n      id\n      rowId\n      caseStudyRowId\n      accompaniedBy\n      adaptedEducationProgram\n      adoptionAge\n      ageDuringLossOfCloseIndividual\n      arrivalReason\n      attendsKindergarten\n      diagnosedIntelectualDevelopmentProblems\n      divorceOutcome\n      divorcedParents\n      earlierProfessionalHelp\n      familyHeredity\n      furtherAbuses\n      individualizedEducationProgram\n      involvedReferral\n      livesWith\n      lossOfCloseIndividual\n      numberOfAdoptions\n      parentsInJail\n      previousTreatment\n      ptsp\n      reasonOfMultipleAdoptions\n      referral\n      referralDiagnosis\n      reportedFurtherAbuses\n      schoolMark\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cec72ec24f9ac59fb07e126cdaef138e';
export default node;
