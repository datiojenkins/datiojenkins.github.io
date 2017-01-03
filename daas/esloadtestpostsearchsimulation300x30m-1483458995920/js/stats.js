var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1038176",
        "ok": "860056",
        "ko": "178120"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "48",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "60064",
        "ok": "32911",
        "ko": "60064"
    },
    "meanResponseTime": {
        "total": "520",
        "ok": "486",
        "ko": "681"
    },
    "standardDeviation": {
        "total": "1277",
        "ok": "982",
        "ko": "2195"
    },
    "percentiles1": {
        "total": "254",
        "ok": "244",
        "ko": "315"
    },
    "percentiles2": {
        "total": "313",
        "ok": "287",
        "ko": "359"
    },
    "percentiles3": {
        "total": "1351",
        "ok": "1312",
        "ko": "1525"
    },
    "percentiles4": {
        "total": "3426",
        "ok": "3376",
        "ko": "4610"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 48891,
        "percentage": 5
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 689861,
        "percentage": 66
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121304,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 178120,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "557.971",
        "ok": "462.24",
        "ko": "95.731"
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
        "total": "1038176",
        "ok": "860056",
        "ko": "178120"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "48",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "60064",
        "ok": "32911",
        "ko": "60064"
    },
    "meanResponseTime": {
        "total": "520",
        "ok": "486",
        "ko": "681"
    },
    "standardDeviation": {
        "total": "1277",
        "ok": "982",
        "ko": "2195"
    },
    "percentiles1": {
        "total": "255",
        "ok": "244",
        "ko": "315"
    },
    "percentiles2": {
        "total": "313",
        "ok": "287",
        "ko": "359"
    },
    "percentiles3": {
        "total": "1352",
        "ok": "1312",
        "ko": "1525"
    },
    "percentiles4": {
        "total": "3427",
        "ok": "3376",
        "ko": "4610"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 48891,
        "percentage": 5
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 689861,
        "percentage": 66
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121304,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 178120,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "557.971",
        "ok": "462.24",
        "ko": "95.731"
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
