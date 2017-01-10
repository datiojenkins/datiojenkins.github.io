var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1471655",
        "ok": "184213",
        "ko": "1287442"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "91113",
        "ok": "80155",
        "ko": "91113"
    },
    "meanResponseTime": {
        "total": "1624",
        "ok": "2526",
        "ko": "1495"
    },
    "standardDeviation": {
        "total": "8266",
        "ok": "7913",
        "ko": "8308"
    },
    "percentiles1": {
        "total": "87",
        "ok": "136",
        "ko": "86"
    },
    "percentiles2": {
        "total": "145",
        "ok": "385",
        "ko": "104"
    },
    "percentiles3": {
        "total": "3018",
        "ok": "29315",
        "ko": "1432"
    },
    "percentiles4": {
        "total": "59995",
        "ok": "37435",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 131368,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 12445,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 40400,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 1287442,
        "percentage": 87
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1203.865",
        "ok": "150.693",
        "ko": "1053.172"
    }
},
contents: {
"req_castresstestpos-57704": {
        type: "REQUEST",
        name: "CaStressTestPostSimulation",
path: "CaStressTestPostSimulation",
pathFormatted: "req_castresstestpos-57704",
stats: {
    "name": "CaStressTestPostSimulation",
    "numberOfRequests": {
        "total": "1471655",
        "ok": "184213",
        "ko": "1287442"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "91113",
        "ok": "80155",
        "ko": "91113"
    },
    "meanResponseTime": {
        "total": "1624",
        "ok": "2526",
        "ko": "1495"
    },
    "standardDeviation": {
        "total": "8266",
        "ok": "7913",
        "ko": "8308"
    },
    "percentiles1": {
        "total": "87",
        "ok": "136",
        "ko": "86"
    },
    "percentiles2": {
        "total": "145",
        "ok": "385",
        "ko": "104"
    },
    "percentiles3": {
        "total": "3019",
        "ok": "29315",
        "ko": "1427"
    },
    "percentiles4": {
        "total": "59995",
        "ok": "37435",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 131368,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 12445,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 40400,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 1287442,
        "percentage": 87
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1203.865",
        "ok": "150.693",
        "ko": "1053.172"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
