var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1072659",
        "ok": "859999",
        "ko": "212660"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "35822",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "503",
        "ok": "471",
        "ko": "634"
    },
    "standardDeviation": {
        "total": "1267",
        "ok": "966",
        "ko": "2075"
    },
    "percentiles1": {
        "total": "246",
        "ok": "232",
        "ko": "291"
    },
    "percentiles2": {
        "total": "295",
        "ok": "276",
        "ko": "340"
    },
    "percentiles3": {
        "total": "1332",
        "ok": "1299",
        "ko": "1488"
    },
    "percentiles4": {
        "total": "3409",
        "ok": "3341",
        "ko": "3667"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 149472,
        "percentage": 14
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 590523,
        "percentage": 55
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 120004,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 212660,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "577.679",
        "ok": "463.151",
        "ko": "114.528"
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
        "total": "1072659",
        "ok": "859999",
        "ko": "212660"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "35822",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "503",
        "ok": "471",
        "ko": "634"
    },
    "standardDeviation": {
        "total": "1267",
        "ok": "966",
        "ko": "2075"
    },
    "percentiles1": {
        "total": "246",
        "ok": "232",
        "ko": "291"
    },
    "percentiles2": {
        "total": "295",
        "ok": "276",
        "ko": "340"
    },
    "percentiles3": {
        "total": "1333",
        "ok": "1298",
        "ko": "1488"
    },
    "percentiles4": {
        "total": "3409",
        "ok": "3341",
        "ko": "3667"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 149472,
        "percentage": 14
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 590523,
        "percentage": 55
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 120004,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 212660,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "577.679",
        "ok": "463.151",
        "ko": "114.528"
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
