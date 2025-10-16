# 🛠️ Workflow: Maintenance Reminder

## 🎯 Goal
Automatically alert the maintenance team when an aircraft crosses 500 flight hours.

## 🔧 Tools Used
- n8n (Cloud)
- Google Sheets
- Telegram Bot

## 🔄 Workflow Steps
1. **Trigger**: n8n checks Google Sheets every 6 hours
2. **Condition**: If `Flight Hours > 500`
3. **Action**: Send Telegram message to maintenance team
4. **Log**: Update status in Google Sheets

## 📊 Sample Google Sheet
| Aircraft | Flight Hours | Status     |
|----------|--------------|------------|
| A320     | 520          | Alert Sent |
| B737     | 480          | OK         |

## 🤖 Telegram Message# 🛠️ Workflow: Maintenance Reminder

## 🎯 Goal
Automatically alert the maintenance team when an aircraft crosses 500 flight hours.

## 🔧 Tools Used
- n8n (Cloud)
- Google Sheets
- Telegram Bot

## 🔄 Workflow Steps
1. **Trigger**: n8n checks Google Sheets every 6 hours
2. **Condition**: If `Flight Hours > 500`
3. **Action**: Send Telegram message to maintenance team
4. **Log**: Update status in Google Sheets

## 📊 Sample Google Sheet
| Aircraft | Flight Hours | Status     |
|----------|--------------|------------|
| A320     | 520          | Alert Sent |
| B737     | 480          | OK         |

## 🤖 Telegram Message
## 📁 n8n Workflow Export
You can import this JSON into n8n:
> [Download workflow_maintenance_reminder.json](#)

## 👨‍💼 Author
Syed Muhammad Amjad  
Founder of ProAOG | Aviation Automation Specialist

