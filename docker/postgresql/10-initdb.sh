#!/bin/bash
set -e


psql -v ON_ERROR_STOP=1 --username postgres -f /scripts/1.sql

psql -v ON_ERROR_STOP=1 --username postgres -d epidemic -f /scripts/2.sql
