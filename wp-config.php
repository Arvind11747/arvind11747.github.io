<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stagearvindwpsite' );

/** Database username */
define( 'DB_USER', 'arvind4646' );

/** Database password */
define( 'DB_PASSWORD', 'wpsite117478216!!&' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#&:d~On=JMd 2Ek8K*7~F`KTx/viU+633,uv?7>:y;#f_l~Zf2%U#]QJYYCDT4U&' );
define( 'SECURE_AUTH_KEY',  'KOp3P>>vl#a07b3JG}-U4O47,*GJy52^3-?0=Mf.+DlaZO%F!S3LRyn0_jC!wiyF' );
define( 'LOGGED_IN_KEY',    '8y&:*(Z%2onkwRbJHmX6_`YVa:YQN]L7mhW;F(J/[x=Wi`,}MwjkCm3&!/6zWol5' );
define( 'NONCE_KEY',        'h1zK$9?0wE*qPk8XO}}?3J}41HlnR|H,~1Jb`9UcR-##4`OR*T:apBn;N$qG%:Zk' );
define( 'AUTH_SALT',        '{bku3D+fd7<V`EHl%JnL=.b8%D>2~f7?Gh&^wMJ_cho0t!-<XIhuHk&8X[k)!8<@' );
define( 'SECURE_AUTH_SALT', '2^)@jRZtG}PX;=MS6L[Ln.Z$]+h|[[,Hmw&|ebW:yGt*E~zuybLp8axKyD}5Uz0M' );
define( 'LOGGED_IN_SALT',   ':0p#2:jps9TB:I)A+8r:v7tGjdTmo*MOk>~MA<W~A`{H?I;h)!1O>!;K19Ds6p;3' );
define( 'NONCE_SALT',       '4${a )y}T%%$A@F1Z~[T@+b}sW/r~_kZr>D@_r_Cvy_*}I)dXmi7G`.n@J=s:r<2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
