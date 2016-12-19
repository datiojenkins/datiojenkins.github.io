var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "460500",
        "ok": "37660",
        "ko": "422840"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "75",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "31888",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "193",
        "ok": "743",
        "ko": "144"
    },
    "standardDeviation": {
        "total": "607",
        "ok": "1360",
        "ko": "456"
    },
    "percentiles1": {
        "total": "89",
        "ok": "385",
        "ko": "89"
    },
    "percentiles2": {
        "total": "97",
        "ok": "477",
        "ko": "93"
    },
    "percentiles3": {
        "total": "1074",
        "ok": "2176",
        "ko": "182"
    },
    "percentiles4": {
        "total": "1485",
        "ok": "7379",
        "ko": "1270"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1265,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 29860,
        "percentage": 6
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 6535,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 422840,
        "percentage": 92
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1395.653",
        "ok": "114.137",
        "ko": "1281.516"
    }
},
contents: {
"req_esloadtestposts-79439": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation30x1m",
path: "EsLoadTestPostSearchSimulation30x1m",
pathFormatted: "req_esloadtestposts-79439",
stats: {
    "name": "EsLoadTestPostSearchSimulation30x1m",
    "numberOfRequests": {
        "total": "460500",
        "ok": "37660",
        "ko": "422840"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "75",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "31888",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "193",
        "ok": "743",
        "ko": "144"
    },
    "standardDeviation": {
        "total": "607",
        "ok": "1360",
        "ko": "456"
    },
    "percentiles1": {
        "total": "89",
        "ok": "385",
        "ko": "88"
    },
    "percentiles2": {
        "total": "97",
        "ok": "477",
        "ko": "94"
    },
    "percentiles3": {
        "total": "1073",
        "ok": "2176",
        "ko": "182"
    },
    "percentiles4": {
        "total": "1485",
        "ok": "7379",
        "ko": "1270"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1265,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 29860,
        "percentage": 6
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 6535,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 422840,
        "percentage": 92
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1395.653",
        "ok": "114.137",
        "ko": "1281.516"
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
