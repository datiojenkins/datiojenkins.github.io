var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2138579",
        "ok": "306811",
        "ko": "1831768"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "60",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "54015",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "252",
        "ok": "670",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "815",
        "ok": "1122",
        "ko": "728"
    },
    "percentiles1": {
        "total": "92",
        "ok": "381",
        "ko": "90"
    },
    "percentiles2": {
        "total": "160",
        "ok": "449",
        "ko": "116"
    },
    "percentiles3": {
        "total": "1084",
        "ok": "1578",
        "ko": "284"
    },
    "percentiles4": {
        "total": "3091",
        "ok": "6123",
        "ko": "3080"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 2635,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 253442,
        "percentage": 12
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 50734,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1831768,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1168.654",
        "ok": "167.661",
        "ko": "1000.993"
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
        "total": "2138579",
        "ok": "306811",
        "ko": "1831768"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "60",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "54015",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "252",
        "ok": "670",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "815",
        "ok": "1122",
        "ko": "728"
    },
    "percentiles1": {
        "total": "92",
        "ok": "381",
        "ko": "90"
    },
    "percentiles2": {
        "total": "160",
        "ok": "449",
        "ko": "116"
    },
    "percentiles3": {
        "total": "1085",
        "ok": "1578",
        "ko": "284"
    },
    "percentiles4": {
        "total": "3091",
        "ok": "6118",
        "ko": "3080"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 2635,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 253442,
        "percentage": 12
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 50734,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1831768,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1168.654",
        "ok": "167.661",
        "ko": "1000.993"
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
