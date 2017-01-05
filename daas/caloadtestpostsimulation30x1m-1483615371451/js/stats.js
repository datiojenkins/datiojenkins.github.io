var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29570",
        "ok": "30",
        "ko": "29540"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "94",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1098",
        "ok": "138",
        "ko": "1098"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "110",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "9",
        "ko": "17"
    },
    "percentiles1": {
        "total": "54",
        "ok": "108",
        "ko": "54"
    },
    "percentiles2": {
        "total": "58",
        "ok": "115",
        "ko": "58"
    },
    "percentiles3": {
        "total": "68",
        "ok": "126",
        "ko": "68"
    },
    "percentiles4": {
        "total": "105",
        "ok": "135",
        "ko": "103"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 30,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 29540,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "469.417",
        "ok": "0.476",
        "ko": "468.941"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles2": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles3": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles4": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 30,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.476",
        "ok": "0.476",
        "ko": "-"
    }
}
    },"req_caloadtestposts-5527a": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m Redirect 1",
path: "CaLoadTestPostSimulation30x1m Redirect 1",
pathFormatted: "req_caloadtestposts-5527a",
stats: {
    "name": "CaLoadTestPostSimulation30x1m Redirect 1",
    "numberOfRequests": {
        "total": "29540",
        "ok": "0",
        "ko": "29540"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1098",
        "ok": "-",
        "ko": "1098"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "-",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "percentiles1": {
        "total": "54",
        "ok": "-",
        "ko": "54"
    },
    "percentiles2": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles3": {
        "total": "68",
        "ok": "-",
        "ko": "68"
    },
    "percentiles4": {
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 29540,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "468.941",
        "ok": "-",
        "ko": "468.941"
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
