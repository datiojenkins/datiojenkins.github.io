var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "62271",
        "ok": "56817",
        "ko": "5454"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "48"
    },
    "maxResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "57",
        "ok": "56",
        "ko": "66"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "10"
    },
    "percentiles1": {
        "total": "54",
        "ok": "53",
        "ko": "65"
    },
    "percentiles2": {
        "total": "60",
        "ok": "58",
        "ko": "73"
    },
    "percentiles3": {
        "total": "82",
        "ok": "81",
        "ko": "86"
    },
    "percentiles4": {
        "total": "102",
        "ok": "103",
        "ko": "101"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 56813,
        "percentage": 91
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 5454,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "506.462",
        "ok": "462.103",
        "ko": "44.358"
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
        "total": "62271",
        "ok": "56817",
        "ko": "5454"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "48"
    },
    "maxResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "57",
        "ok": "56",
        "ko": "66"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "10"
    },
    "percentiles1": {
        "total": "54",
        "ok": "53",
        "ko": "65"
    },
    "percentiles2": {
        "total": "60",
        "ok": "57",
        "ko": "73"
    },
    "percentiles3": {
        "total": "82",
        "ok": "81",
        "ko": "86"
    },
    "percentiles4": {
        "total": "102",
        "ok": "103",
        "ko": "101"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 56813,
        "percentage": 91
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 5454,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "506.462",
        "ok": "462.103",
        "ko": "44.358"
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
