'use strict';

/* jshint multistr: true */

var BOGUS_CERT_PEM = '-----BEGIN CERTIFICATE-----\n\
MIICKjCCAZMCCQDQ8o4kHKdCPDANBgkqhkiG9w0BAQUFADB6MQswCQYDVQQGEwJV\n\
UzELMAkGA1UECBMCQ0ExCzAJBgNVBAcTAlNGMQ8wDQYDVQQKEwZKb3llbnQxEDAO\n\
BgNVBAsTB05vZGUuanMxDDAKBgNVBAMTA2NhMTEgMB4GCSqGSIb3DQEJARYRcnlA\n\
dGlueWNsb3Vkcy5vcmcwHhcNMTEwMzE0MTgyOTEyWhcNMzgwNzI5MTgyOTEyWjB9\n\
MQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExCzAJBgNVBAcTAlNGMQ8wDQYDVQQK\n\
EwZKb3llbnQxEDAOBgNVBAsTB05vZGUuanMxDzANBgNVBAMTBmFnZW50MTEgMB4G\n\
CSqGSIb3DQEJARYRcnlAdGlueWNsb3Vkcy5vcmcwXDANBgkqhkiG9w0BAQEFAANL\n\
ADBIAkEAnzpAqcoXZxWJz/WFK7BXwD23jlREyG11x7gkydteHvn6PrVBbB5yfu6c\n\
bk8w3/Ar608AcyMQ9vHjkLQKH7cjEQIDAQABMA0GCSqGSIb3DQEBBQUAA4GBAKha\n\
HqjCfTIut+m/idKy3AoFh48tBHo3p9Nl5uBjQJmahKdZAaiksL24Pl+NzPQ8LIU+\n\
FyDHFp6OeJKN6HzZ72Bh9wpBVu6Uj1hwhZhincyTXT80wtSI/BoUAW8Ls2kwPdus\n\
64LsJhhxqj2m4vPKNRbHB2QxnNrGi30CUf3kt3Ia\n\
-----END CERTIFICATE-----';

var BOGUS_KEY_PEM = '-----BEGIN RSA PRIVATE KEY-----\n\
MIIBOwIBAAJBAJ86QKnKF2cVic/1hSuwV8A9t45URMhtdce4JMnbXh75+j61QWwe\n\
cn7unG5PMN/wK+tPAHMjEPbx45C0Ch+3IxECAwEAAQJBAI2cU1IuR+4IO87WPyAB\n\
76kruoo87AeNQkjjvuQ/00+b/6IS45mcEP5Kw0NukbqBhIw2di9uQ9J51DJ/ZfQr\n\
+YECIQDUHaN3ZjIdJ7/w8Yq9Zzz+3kY2F/xEz6e4ftOFW8bY2QIhAMAref+WYckC\n\
oECgOLAvAxB1lI4j7oCbAaawfxKdnPj5AiEAi95rXx09aGpAsBGmSdScrPdG1v6j\n\
83/2ebrvoZ1uFqkCIB0AssnrRVjUB6GZTNTyU3ERfdkx/RX1zvr8WkFR/lXpAiB7\n\
cUZ1i8ZkZrPrdVgw2cb28UJM7qZHQnXcMHTXFFvxeQ==\n\
-----END RSA PRIVATE KEY-----';

module.exports = {
  SSDP_NT: process.env.SSDP_NT || 'http://www.thaliproject.org/ssdp',
  SSDP_ADVERTISEMENT_INTERVAL: 500,
  SSDP_OWN_PEERS_HISTORY_SIZE: 10,
  PEER_AVAILABILITY_WATCHER_INTERVAL: 1000,
  TCP_PEER_UNAVAILABILITY_THRESHOLD: 5 * 500,
  NON_TCP_PEER_UNAVAILABILITY_THRESHOLD: 1000 * 60 * 60 * 24 * 10, // TODO increase this timeout to 10 years when #1415 will be fixed.
  TCP_TIMEOUT_WIFI: 1000,
  TCP_TIMEOUT_BLUETOOTH: 5000,
  TCP_TIMEOUT_MPCF: 5000,
  NOTIFICATION_BEACON_PATH: '/NotificationBeacons',
  BEACON_MILLISECONDS_TO_EXPIRE: 60 * 60 * 1000,
  BASE_DB_PATH: '/db',
  SUPPORTED_PSK_CIPHERS: 'PSK-AES256-CBC-SHA',
  BEACON_CURVE: 'secp256k1',
  MAXIMUM_NATIVE_PEERS_CREATE_PEER_LISTENER_ADVERTISES: 20,
  BOGUS_CERT_PEM: BOGUS_CERT_PEM,
  BOGUS_KEY_PEM: BOGUS_KEY_PEM,
  BEACON_PSK_IDENTITY: 'Beacon Please',
  BEACON_KEY: new Buffer('Let me in please!!'),
  MAX_NOTIFICATIONSERVER_PSK_MAP_CACHE_SIZE: 50,
  LOCAL_SEQ_POINT_PREFIX: 'thali_',
  UPDATE_WINDOWS_FOREGROUND_MS: 1000,
  UPDATE_WINDOWS_BACKGROUND_MS: 10000,
  MAXIMUM_NUMBER_OF_PEERS_TO_NOTIFY: 15,
  ANDROID_ZOMBIE_THRESHOLD: 500,
  ANDROID_ZOMBIE_MAX_DELAY: 1000,
};
