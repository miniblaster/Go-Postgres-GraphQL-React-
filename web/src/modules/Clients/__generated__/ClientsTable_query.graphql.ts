/**
 * @generated SignedSource<<c68de2d7ef1c3ae3f083c7da8b57aa34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsTable_query$data = {
  readonly filterClients: {
    readonly totalCount: number;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly rowId: string;
        readonly number: number;
        readonly fullName: string;
        readonly latestAssignedTherapist: {
          readonly therapist: {
            readonly rowId: string;
            readonly fullName: string;
          };
        } | null;
        readonly treatments: {
          readonly totalCount: number;
        };
      };
    }>;
  };
  readonly " $fragmentType": "ClientsTable_query";
};
export type ClientsTable_query$key = {
  readonly " $data"?: ClientsTable_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientsTable_query">;
};

import ClientsTableRefetchQuery_graphql from './ClientsTableRefetchQuery.graphql';
const node: ReaderFragment = (function(){
var v0 = [
  "filterClients"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "q"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": ClientsTableRefetchQuery_graphql
    }
  },
  "name": "ClientsTable_query",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": "filterClients",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "NUMBER_DESC"
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "q"
          }
        ],
        "concreteType": "ClientsConnection",
        "kind": "LinkedField",
        "name": "__ClientsTable_filterClients_connection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "number",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClientAssignedTherapist",
                    "kind": "LinkedField",
                    "name": "latestAssignedTherapist",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "RequiredField",
                        "field": {
                          "alias": "therapist",
                          "args": null,
                          "concreteType": "Therapist",
                          "kind": "LinkedField",
                          "name": "therapistByTherapistRowId",
                          "plural": false,
                          "selections": [
                            (v2/*: any*/),
                            (v3/*: any*/)
                          ],
                          "storageKey": null
                        },
                        "action": "THROW",
                        "path": "filterClients.edges.node.latestAssignedTherapist.therapist"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "treatments",
                    "args": null,
                    "concreteType": "CaseStudyTreatmentsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "filterClients"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "05dbe8e95696f918557150810e7cdc2e";
}

export default node;