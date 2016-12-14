var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "186754",
        "ok": "90331",
        "ko": "96423"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "53",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "34929",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "483",
        "ok": "694",
        "ko": "285"
    },
    "standardDeviation": {
        "total": "1412",
        "ok": "1333",
        "ko": "1454"
    },
    "percentiles1": {
        "total": "260",
        "ok": "386",
        "ko": "97"
    },
    "percentiles2": {
        "total": "388",
        "ok": "404",
        "ko": "107"
    },
    "percentiles3": {
        "total": "1400",
        "ok": "1749",
        "ko": "1089"
    },
    "percentiles4": {
        "total": "3999",
        "ok": "7386",
        "ko": "3293"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 75940,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1419,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12972,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 96423,
        "percentage": 52
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "548.941",
        "ok": "265.517",
        "ko": "283.424"
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
        "total": "186754",
        "ok": "90331",
        "ko": "96423"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "53",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "34929",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "483",
        "ok": "694",
        "ko": "285"
    },
    "standardDeviation": {
        "total": "1412",
        "ok": "1333",
        "ko": "1454"
    },
    "percentiles1": {
        "total": "260",
        "ok": "386",
        "ko": "97"
    },
    "percentiles2": {
        "total": "389",
        "ok": "404",
        "ko": "107"
    },
    "percentiles3": {
        "total": "1400",
        "ok": "1745",
        "ko": "1089"
    },
    "percentiles4": {
        "total": "3997",
        "ok": "7385",
        "ko": "3294"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 75940,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1419,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12972,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 96423,
        "percentage": 52
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "548.941",
        "ok": "265.517",
        "ko": "283.424"
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
