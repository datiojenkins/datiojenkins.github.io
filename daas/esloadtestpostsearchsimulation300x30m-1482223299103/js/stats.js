var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1030666",
        "ok": "857801",
        "ko": "172865"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "46",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60063",
        "ok": "32608",
        "ko": "60063"
    },
    "meanResponseTime": {
        "total": "523",
        "ok": "493",
        "ko": "672"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "902",
        "ko": "1990"
    },
    "percentiles1": {
        "total": "285",
        "ok": "274",
        "ko": "320"
    },
    "percentiles2": {
        "total": "349",
        "ok": "339",
        "ko": "391"
    },
    "percentiles3": {
        "total": "1373",
        "ok": "1350",
        "ko": "1501"
    },
    "percentiles4": {
        "total": "3389",
        "ok": "3357",
        "ko": "3541"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 53088,
        "percentage": 5
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 688828,
        "percentage": 67
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 115885,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 172865,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "554.141",
        "ok": "461.199",
        "ko": "92.941"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "1030666",
        "ok": "857801",
        "ko": "172865"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "46",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60063",
        "ok": "32608",
        "ko": "60063"
    },
    "meanResponseTime": {
        "total": "523",
        "ok": "493",
        "ko": "672"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "902",
        "ko": "1990"
    },
    "percentiles1": {
        "total": "285",
        "ok": "274",
        "ko": "320"
    },
    "percentiles2": {
        "total": "349",
        "ok": "339",
        "ko": "391"
    },
    "percentiles3": {
        "total": "1372",
        "ok": "1350",
        "ko": "1501"
    },
    "percentiles4": {
        "total": "3389",
        "ok": "3357",
        "ko": "3541"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 53088,
        "percentage": 5
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 688828,
        "percentage": 67
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 115885,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 172865,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "554.141",
        "ok": "461.199",
        "ko": "92.941"
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
