'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');
const { elasticsearchService } = require('onf-core-model-ap/applicationPattern/services/ElasticsearchService');



/**
 * Returns entire data tree
 *
 * returns inline_response_200_8
 **/
exports.getControlConstruct = function () {
  return new Promise(async function (resolve, reject) {
       var examples = {};
       examples['application/json'] = {
         "core-model-1-4:control-construct": {
           "profile-collection": {
             "profile": [{
               "uuid": "ro-2-0-1-integer-p-000",
               "profile-name": "integer-profile-1-0:PROFILE_NAME_TYPE_INTEGER_PROFILE",
               "integer-profile-1-0:integer-profile-pac": {
                 "integer-profile-capability": {
                   "integer-name": "maximumNumberOfEntries",
                   "unit": "records",
                   "minimum": 0,
                   "maximum": 1000000
                 },
                 "integer-profile-configuration": {
                   "integer-value": 1000000
                 }
               }
             }]
           },
           "forwarding-domain": [{
             "uuid": "ro-2-0-1-op-fd-000",
             "forwarding-construct": [{
               "uuid": "ro-2-0-1-op-fc-bm-003",
               "name": [{
                 "value-name": "ForwardingKind",
                 "value": "core-model-1-4:FORWARDING_KIND_TYPE_INVARIANT_PROCESS_SNIPPET"
               }, {
                 "value-name": "ForwardingName",
                 "value": "OamRequestCausesLoggingRequest"
               }],
               "fc-port": [{
                 "local-id": "000",
                 "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_MANAGEMENT",
                 "logical-termination-point": "ro-2-0-1-op-s-bm-003"
               }, {
                 "local-id": "200",
                 "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_OUTPUT",
                 "logical-termination-point": "ro-2-0-1-op-c-bs-ol-2-0-1-000"
               }]
             }, {
               "uuid": "ro-2-0-1-op-fc-bm-004",
               "name": [{
                 "value-name": "ForwardingKind",
                 "value": "core-model-1-4:FORWARDING_KIND_TYPE_INVARIANT_PROCESS_SNIPPET"
               }, {
                 "value-name": "ForwardingName",
                 "value": "OamRequestCausesInquiryForAuthentication"
               }],
               "fc-port": [{
                 "local-id": "000",
                 "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_MANAGEMENT",
                 "logical-termination-point": "ro-2-0-1-op-s-bm-005"
               }, {
                 "local-id": "200",
                 "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_OUTPUT",
                 "logical-termination-point": "ro-2-0-1-op-c-bs-aa-2-0-1-000"
               }]
             }]
           }],
           "logical-termination-point": [{
             "uuid": "ro-2-0-1-op-c-bm-ro-2-0-1-000",
             "ltp-direction": "core-model-1-4:TERMINATION_DIRECTION_SINK",
             "client-ltp": [],
             "server-ltp": ["ro-2-0-1-http-c-ro-2-0-1-000"],
             "layer-protocol": [{
               "local-id": "0",
               "layer-protocol-name": "operation-client-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_OPERATION_LAYER",
               "operation-client-interface-1-0:operation-client-interface-pac": {
                 "operation-client-interface-configuration": {
                   "operation-name": "/v1/register-application",
                   "operation-key": "Operation key not yet provided."
                 },
                 "operation-client-interface-status": {
                   "operational-state": "operation-client-interface-1-0:OPERATIONAL_STATE_TYPE_NOT_YET_DEFINED",
                   "life-cycle-state": "operation-client-interface-1-0:LIFE_CYCLE_STATE_TYPE_NOT_YET_DEFINED"
                 }
               }
             }]
           }, {
             "uuid": "ro-2-0-1-http-c-ro-2-0-1-000",
             "ltp-direction": "core-model-1-4:TERMINATION_DIRECTION_SINK",
             "client-ltp": ["ro-2-0-1-op-c-bm-ro-2-0-1-000"],
             "server-ltp": ["ro-2-0-1-tcp-c-ro-2-0-1-000"],
             "layer-protocol": [{
               "local-id": "0",
               "layer-protocol-name": "http-client-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_HTTP_LAYER",
               "http-client-interface-1-0:http-client-interface-pac": {
                 "http-client-interface-configuration": {
                   "application-name": "RegistryOffice",
                   "release-number": "2.0.1"
                 }
               }
             }]
           }],
           "uuid": "ro-1-0-0"
         }
       };
       if (Object.keys(examples).length > 0) {
         resolve(examples[Object.keys(examples)[0]]);
       } else {
         resolve();
       }
  });




  /*let client1 = await elasticsearchService.getClient(false);
  const response = await client1.index({
    index: 'control_construct', 
    body: CCon, 
  });


  //control_construct: l'index l'ho messo io in ES con postman
 
  //let indexAlias1 = await getIndexAliasAsync();
  let res1 = await client1.search({
    index: "control_construct",
    filter_path: "hits.hits._source",
    body: {
      "query": {
        "match_all": {}
      }
    }
  });

  if (Object.keys(res1.body).length === 0) {
    throw new Error(`Could not find existing control-construct with UUID ${controlConstructUuid}`);
  }
  //let controlConstruct = createResultArray(res1);


});*/


}


/**
 * Returns entire instance of Profile
 *
 * uuid String 
 * returns inline_response_200_9
 **/
exports.getProfileInstance = function (url) {
  /*return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:profile": ""
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });*/
  return new Promise(async function (resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(url);
      var response = {};
      response['application/json'] = {
        "core-model-1-4:profile": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}

